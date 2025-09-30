import React from "react";
import clsx from "clsx";

interface CardProps {
  title: string;
  icon?: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
  titleAlign?: "left" | "center" | "right";
  titleColor?: string;    // e.g. "#FF6347" or "text-primary"
  subtitleColor?: string; // optional
}

const Card: React.FC<CardProps> = ({
  title,
  icon,
  subtitle,
  children,
  className = "",
  fullHeight = true,
  titleAlign = "left",
  titleColor,
  subtitleColor,
}) => {
  return (
    <section
      className={clsx(
        "bg-white dark:bg-slate-900 rounded-xl shadow-md w-full flex flex-col transition-transform duration-300",
        fullHeight ? "p-8" : "p-6",
        "hover:-translate-y-1",
        className
      )}
    >
      {icon && (
        <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 dark:bg-blue-600/20 dark:text-blue-600 mb-3">
          {icon}
        </div>
      )}

      <h3
        className={clsx(
          "text-lg font-semibold mb-2",
          {
            "text-left": titleAlign === "left",
            "text-center": titleAlign === "center",
            "text-right": titleAlign === "right",
          }
        )}
        style={{ color: titleColor }}
      >
        {title}
      </h3>

      {subtitle && (
        <p
          className="text-base mb-4"
          style={{ color: subtitleColor }}
        >
          {subtitle}
        </p>
      )}

      <div className="flex-1 flex flex-col gap-3 text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </section>
  );
};

export default Card;
