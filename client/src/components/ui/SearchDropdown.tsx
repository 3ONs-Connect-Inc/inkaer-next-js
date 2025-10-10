"use client";
import React from "react";
import { cn } from "@/utils/clsx";

interface SearchDropdownProps<T> {
  query: string;
  onChange: (value: string) => void;
  results: T[];
  getLabel: (item: T) => string;
  onSelect: (item: T) => void;
  placeholder?: string;
  className?: string;
}

export function SearchDropdown<T>({
  query,
  onChange,
  results,
  getLabel,
  onSelect,
  placeholder = "Search...",
  className,
}: SearchDropdownProps<T>) {
  return (
    <div className={cn("relative w-full max-w-sm", className)}>
      <input
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {query && results.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-md max-h-56 overflow-auto">
          {results.map((item, i) => (
            <li
              key={i}
              onClick={() => onSelect(item)}
              className="px-3 py-2 text-sm cursor-pointer hover:bg-blue-50"
            >
              {getLabel(item)}
            </li>
          ))}
        </ul>
      )}

      {query && results.length === 0 && (
        <div className="absolute z-10 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-md text-gray-500 text-sm px-3 py-2">
          No results found
        </div>
      )}
    </div>
  );
}
