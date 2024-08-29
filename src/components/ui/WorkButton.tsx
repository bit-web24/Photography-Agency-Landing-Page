import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-3xl text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input text-black bg-background shadow-sm hover:bg-gray-300",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "border border-white text-white bg-transparent hover:bg-white hover:text-black",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-7 py-6 text-base",
        sm: "h-8 rounded-3xl px-4 text-sm",
        lg: "h-12 rounded-3xl px-8 text-lg",
        icon: "h-10 w-10 rounded-3xl text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          "sm:text-sm md:text-base lg:text-lg"  // Responsive text sizes
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

const Tag = ({ children, className = "" }: TagProps) => (
  <span
    className={`inline-flex items-center px-3 py-1 text-sm font-medium border border-gray-200 rounded-full text-white bg-transparent hover:bg-white hover:text-black transition ${className}`}
  >
    {children}
  </span>
);


export { Button, buttonVariants, Tag }
