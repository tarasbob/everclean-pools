"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    href?: never;
  };

type ButtonAsLink = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  variant = "primary",
  size = "md",
  showArrow = false,
  fullWidth = false,
  loading = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transform active:scale-95";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-pool-blue to-deep-aqua text-white hover:from-deep-aqua hover:to-pool-blue focus:ring-pool-blue shadow-lg hover:shadow-xl",
    secondary:
      "bg-white text-pool-blue border-2 border-pool-blue hover:bg-pool-blue hover:text-white focus:ring-pool-blue",
    outline:
      "bg-transparent text-pool-blue border-2 border-pool-blue hover:bg-pool-blue hover:text-white focus:ring-pool-blue",
    ghost:
      "bg-transparent text-pool-blue hover:bg-pool-blue/10 focus:ring-pool-blue",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
    fullWidth ? "w-full" : ""
  } ${loading ? "opacity-75 cursor-wait" : ""} ${className}`;

  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
      {showArrow && !loading && (
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props as ButtonAsLink;
    return (
      <Link href={href} className={`${classes} group`} {...linkProps}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={`${classes} group`} {...buttonProps}>
      {content}
    </button>
  );
} 