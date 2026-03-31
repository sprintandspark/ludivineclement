import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { glossaryTerms } from "@/data/glossaryTerms";
import { trackEvent } from "@/lib/analytics";

interface Props {
  term: string;
  children: React.ReactNode;
  variant?: "default" | "light";
}

const GlossaryTooltip = ({ term, children, variant = "default" }: Props) => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const ref = useRef<HTMLSpanElement>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const data = glossaryTerms.find(
    (t) => t.term.toLowerCase() === term.toLowerCase()
  );

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        const tooltipEl = document.querySelector('[data-glossary-tooltip]');
        if (tooltipEl && tooltipEl.contains(e.target as Node)) return;
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const updatePosition = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 8,
        left: Math.min(
          rect.left + window.scrollX,
          window.innerWidth - 300
        ),
      });
    }
  };

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    updatePosition();
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setOpen(false), 150);
  };

  const handleTooltipMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpen(true);
  };

  const handleTooltipMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setOpen(false), 150);
  };

  const handleClick = () => {
    updatePosition();
    setOpen((prev) => !prev);
  };

  if (!data) return <>{children}</>;

  const triggerColor = variant === "light" ? "#F59E0B" : "#4F46E5";

  const tooltip = open ? (
    <div
      data-glossary-tooltip
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        width: "288px",
        backgroundColor: "#FFFFFF",
        borderColor: "#E2E8F0",
        border: "1px solid #E2E8F0",
        borderRadius: "12px",
        padding: "16px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
        zIndex: 9999,
      }}
      onMouseEnter={handleTooltipMouseEnter}
      onMouseLeave={handleTooltipMouseLeave}
    >
      <p
        className="font-bold mb-1"
        style={{ color: "#4F46E5", fontSize: "15px" }}
      >
        {data.term}{" "}
        <span
          className="italic font-normal"
          style={{ color: "#64748B", fontSize: "12px" }}
        >
          (it. {data.italian})
        </span>
      </p>
      <p
        className="mb-3"
        style={{ color: "#0F172A", fontSize: "13px", lineHeight: "1.5" }}
      >
        {data.definition}
      </p>
      <p
        className="italic mb-3"
        style={{ color: "#64748B", fontSize: "12px", lineHeight: "1.5" }}
      >
        {data.example}
      </p>
      
        <a href="https://ludivineclement.com/glossario"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-xs"
        style={{ color: "#4F46E5" }}
        onClick={() => trackEvent("glossary_click", { term: term, source: "tooltip" })}
      >
        Vedi glossario →
      </a>
    </div>
  ) : null;

  return (
    <span ref={ref} className="relative inline">
      <span
        className="cursor-pointer"
        style={{
          color: triggerColor,
          borderBottom: `2px dotted ${triggerColor}`,
          paddingBottom: "1px",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {children}
      </span>
      {createPortal(tooltip, document.body)}
    </span>
  );
};

export default GlossaryTooltip;
