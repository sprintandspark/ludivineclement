import { useEffect, useRef, useState } from "react";

interface PlaybookFlipbookProps {
  pages: string[];
}

const AUTOPLAY_MS = 3000;
const ANIMATION_MS = 600;

const PlaybookFlipbook = ({ pages }: PlaybookFlipbookProps) => {
  const total = pages.length;
  const [current, setCurrent] = useState(0);
  const [bottomSrc, setBottomSrc] = useState(pages[0] ?? "");
  const [topSrc, setTopSrc] = useState(pages[0] ?? "");
  const [turning, setTurning] = useState<"next" | "prev" | null>(null);
  const [topInstantTransform, setTopInstantTransform] = useState<string | null>(null);

  const isAnimatingRef = useRef(false);
  const currentRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const endTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  useEffect(() => {
    setCurrent(0);
    setBottomSrc(pages[0] ?? "");
    setTopSrc(pages[0] ?? "");
    setTurning(null);
    setTopInstantTransform(null);
    isAnimatingRef.current = false;
  }, [pages]);

  const turn = (direction: 1 | -1) => {
    if (isAnimatingRef.current || total < 2) return;
    isAnimatingRef.current = true;

    const targetIndex = (currentRef.current + direction + total) % total;

    if (direction === 1) {
      // Next: the incoming page sits underneath (lower z-index) the
      // outgoing page BEFORE the animation starts, so it's visible the
      // instant the top page rotates past 90deg.
      setBottomSrc(pages[targetIndex]);
      setTopInstantTransform(null);
      requestAnimationFrame(() => setTurning("next"));
    } else {
      // Previous: the top page starts pre-rotated out of view (-180deg,
      // hidden via backface-visibility) already showing the incoming
      // page, then curls back into view over the current page.
      setTopInstantTransform("rotateY(-180deg) scaleX(1)");
      setTopSrc(pages[targetIndex]);
      requestAnimationFrame(() => {
        setTopInstantTransform(null);
        requestAnimationFrame(() => setTurning("prev"));
      });
    }

    endTimeoutRef.current = setTimeout(() => {
      setTurning(null);
      setCurrent(targetIndex);
      setTopSrc(pages[targetIndex]);
      setBottomSrc(pages[targetIndex]);
      isAnimatingRef.current = false;
    }, ANIMATION_MS);
  };

  const next = () => turn(1);
  const prev = () => turn(-1);

  const goTo = (index: number) => {
    if (index === current || isAnimatingRef.current) return;
    const forwardStep = (current + 1) % total;
    const backwardStep = (current - 1 + total) % total;
    if (index === forwardStep) {
      turn(1);
    } else if (index === backwardStep) {
      turn(-1);
    } else {
      setCurrent(index);
      setTopSrc(pages[index]);
      setBottomSrc(pages[index]);
    }
  };

  const restartAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, AUTOPLAY_MS);
  };

  useEffect(() => {
    if (total < 2) return;
    timerRef.current = setInterval(next, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (endTimeoutRef.current) clearTimeout(endTimeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages]);

  const stopAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handlePrevClick = () => {
    prev();
    restartAutoplay();
  };

  const handleNextClick = () => {
    next();
    restartAutoplay();
  };

  const handleDotClick = (index: number) => {
    goTo(index);
    restartAutoplay();
  };

  if (total === 0) {
    return null;
  }

  const topTransform =
    topInstantTransform ?? (turning ? undefined : "rotateY(0deg) scaleX(1)");

  return (
    <div style={{ width: "100%", maxWidth: 600, margin: "0 auto" }}>
      <div
        onMouseEnter={stopAutoplay}
        onMouseLeave={restartAutoplay}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "1240 / 1748",
          perspective: "1200px",
          borderRadius: 14,
          boxShadow: "0 20px 50px rgba(31, 35, 64, 0.18)",
          background: "#FBF4E6",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            backfaceVisibility: "hidden",
            background: "#ffffff",
          }}
        >
          <img
            src={bottomSrc}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
              background: "#ffffff",
              userSelect: "none",
            }}
            draggable={false}
          />
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            backfaceVisibility: "hidden",
            background: "#ffffff",
            transformOrigin: "left center",
            transform: topTransform,
            animation:
              turning === "next"
                ? `playbook-flip-next ${ANIMATION_MS}ms ease-in-out forwards`
                : turning === "prev"
                ? `playbook-flip-prev ${ANIMATION_MS}ms ease-in-out forwards`
                : undefined,
          }}
        >
          <img
            src={topSrc}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
              background: "#ffffff",
              userSelect: "none",
            }}
            draggable={false}
          />
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 3,
            pointerEvents: "none",
            boxShadow: "inset 6px 0 12px -8px rgba(0,0,0,0.25)",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          marginTop: 20,
        }}
      >
        <button
          onClick={handlePrevClick}
          aria-label="Pagina precedente"
          style={{
            width: 44,
            height: 44,
            borderRadius: 999,
            border: "none",
            background: "#4F46E5",
            color: "#fff",
            fontSize: 18,
            lineHeight: 1,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          &#10094;
        </button>
        <span
          style={{
            minWidth: 64,
            textAlign: "center",
            fontWeight: 700,
            color: "#1F2340",
            fontSize: 15,
            letterSpacing: "0.02em",
          }}
        >
          {current + 1} / {total}
        </span>
        <button
          onClick={handleNextClick}
          aria-label="Pagina successiva"
          style={{
            width: 44,
            height: 44,
            borderRadius: 999,
            border: "none",
            background: "#4F46E5",
            color: "#fff",
            fontSize: 18,
            lineHeight: 1,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          &#10095;
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 8,
          marginTop: 14,
        }}
      >
        {pages.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            aria-label={`Vai a pagina ${i + 1}`}
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              background: i === current ? "#4F46E5" : "rgba(79, 70, 229, 0.25)",
              transform: i === current ? "scale(1.25)" : "scale(1)",
              cursor: "pointer",
              border: "none",
              padding: 0,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes playbook-flip-next {
          0%   { transform: rotateY(0deg) scaleX(1); }
          50%  { transform: rotateY(-90deg) scaleX(0.78); }
          100% { transform: rotateY(-180deg) scaleX(1); }
        }
        @keyframes playbook-flip-prev {
          0%   { transform: rotateY(-180deg) scaleX(1); }
          50%  { transform: rotateY(-90deg) scaleX(0.78); }
          100% { transform: rotateY(0deg) scaleX(1); }
        }
      `}</style>
    </div>
  );
};

export default PlaybookFlipbook;
