import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { glossaryTerms } from "@/data/glossaryTerms";

interface Props {
  term: string;
  children: React.ReactNode;
}

const GlossaryTooltip = ({ term, children }: Props) => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const ref = useRef<HTMLSpanElement>(null);

  const data = glossaryTerms.find(
    (t) => t.term.toLowerCase() === term.toLowerCase()
  );

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const updatePosition = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const tooltipHeight = 200;
      const spaceBelow = window.innerHeight - rect.bottom;
      const showAbove = spaceBelow < tooltipHeight + 20;

      setPosition({
        top: showAbove
          ? rect.top + window.scrollY - tooltipHeight - 8
          : rect.bottom + window.scrollY + 8,
        left: Math.min(
          rect.left + window.scrollX,
          window.innerWidth - 300
        ),
      });
    }
  };

  const handleMouseEnter = () => {
    updatePosition();
    setOpen(true);
  };

  const handleClick = () => {
    updatePosition();
    setOpen((prev) => !prev);
  };

  if (!data) return <>{children}</>;

  const tooltip = open ? (
    <div
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
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
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
      <Link
        to="/glossario"
        className="font-bold text-xs"
        style={{ color: "#4F46E5" }}
      >
        Vedi glossario →
      </Link>
    </div>
  ) : null;

  return (
    <span ref={ref} className="relative inline">
      <span
        className="cursor-pointer"
        style={{
          color: "#4F46E5",
          borderBottom: "2px dotted #4F46E5",
          paddingBottom: "1px",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setOpen(false)}
        onClick={handleClick}
      >
        {children}
      </span>
      {createPortal(tooltip, document.body)}
    </span>
  );
};

export default GlossaryTooltip;
