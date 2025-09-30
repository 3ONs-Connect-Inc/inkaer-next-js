"use client";
import { classNames, TAG_OPTIONS } from "@/types";
import { Tag } from "lucide-react";

export default function TagSelect({
  value,
  onChange,
}: {
  value: string; // single tag
  onChange: (tags: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {TAG_OPTIONS.map((tag) => {
        const active = value === tag;
        return (
          <button
            key={tag}
            type="button"
            onClick={() => onChange(tag)} // just set the tag directly
            className={classNames(
              "px-3 py-1 rounded-full text-sm border transition-all",
              active
                ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            )}
            aria-pressed={active}
          >
            <span className="inline-flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" />
              {tag}
            </span>
          </button>
        );
      })}
    </div>
  );
}
