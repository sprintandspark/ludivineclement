import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { glossaryTerms } from "@/data/glossaryTerms";

interface Props {
  term: string;
  children: React.ReactNode;
}

const GlossaryTooltip = ({ term, children }: Props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const data = glossaryTerms.find(
    (t) => t.term.toLowerCase() === term.toLowerCase()
  );

  // Close on outside click (mobile)
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (!data) return <>{children}</>;

  return (
    <span ref={ref} className="relative inline">
      <span
        className="cursor-pointer"
        style={{
          color: "#4F46E5",
          borderBottom: "2px dotted #4F46E5",
          paddingBottom: "1px",
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((prev) => !prev)}
      >
        {children}
      </span>

      {open && (
        <>
          {/* Invisible bridge between word and box */}
          <div
            className="absolute left-0 w-full"
            style={{ top: "100%", height: "8px" }}
            onMouseEnter={() => setOpen(true)}
          />

          <div
            ref={tooltipRef}
            className="absolute z-50 left-0 w-72 rounded-xl shadow-xl border"
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#E2E8F0",
              padding: "16px",
              top: "calc(100% + 8px)",
            }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            {/* Term */}
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
