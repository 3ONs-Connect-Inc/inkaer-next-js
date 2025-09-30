import Image from "next/image";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  "aria-label": string;
  className?: string;
  type?: "button" | "submit" | "reset";
  imgSrc?: string;
  imgAlt?: string;
  spanText?: string;
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  "aria-label": ariaLabel,
  className = "",
  type = "button",
  imgSrc,
  imgAlt = "",
  spanText,
  disabled
}) => (
  <button
    type={type}
    className={`cursor-pointer ${className}`}
    onClick={onClick}
    aria-label={ariaLabel}
    disabled={disabled}
  >
  {imgSrc ? (
  <Image
    src={imgSrc}
    alt={imgAlt}
    fill
    sizes="100%"
    className="object-cover"
  />
) : spanText ? (
  <span>{spanText}</span>
) : (
  children
)}
  </button>
);
