"use client";

import { useEffect, useRef, useState } from "react";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  options: Option[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export function Select({
  options,
  value,
  defaultValue,
  onChange,
  placeholder = "Select...",
  className = "",
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const [highlighted, setHighlighted] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const selectedValue = value ?? internalValue;

  const selectedOption = options.find((o) => o.value === selectedValue);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlighted((h) => Math.min(h + 1, options.length - 1));
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlighted((h) => Math.max(h - 1, 0));
      }

      if (e.key === "Enter") {
        e.preventDefault();
        select(options[highlighted].value);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, highlighted]);

  function select(val: string) {
    setInternalValue(val);
    onChange?.(val);
    setOpen(false);
  }

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`flex h-10 w-full items-center justify-between rounded border border-zinc-700 bg-zinc-900 px-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      >
        <span className="truncate">{selectedOption?.label ?? placeholder}</span>

        <span className="opacity-60">▾</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-1 w-full rounded border border-zinc-700 bg-zinc-900 shadow-xl">
          {options.map((opt, i) => (
            <div
              key={opt.value}
              onMouseEnter={() => setHighlighted(i)}
              onClick={() => select(opt.value)}
              className={`
                cursor-pointer px-3 py-2 text-sm text-white
                ${i === highlighted ? "bg-blue-600" : ""}
                ${opt.value === selectedValue ? "bg-blue-700" : ""}
              `}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
