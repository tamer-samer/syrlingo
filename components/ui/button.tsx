import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-bold transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer uppercase tracking-wide",
  {
    variants: {
      variant: {
        default:
          "bg-white text-slate-500 border-slate-200 border-2 border-b-4 active:border-b-2 hover:bg-slate-100",
        primary:
          "bg-sky-500 text-primary-foreground border-sky-600 border-b-4 active:border-b-0 hover:bg-sky-500/90",
        primaryOutline: "bg-white text-sky-500 hover:bg-sky-100",
        secondary:
          "bg-green-500 text-primary-foreground border-green-600 border-b-4 active:border-b-0 hover:bg-green-500/90",
        secondaryOutline:
          "bg-white text-green-500 border-green-500 border-2 border-b-4 active:border-b-2 hover:bg-green-100",
        danger:
          "bg-rose-500 text-primary-foreground border-rose-600 border-b-4 active:border-b-0 hover:bg-rose-500/90",
        dangerOutline: "bg-white text-rose-500 hover:bg-rose-100",
        super:
          "bg-indigo-500 text-primary-foreground border-indigo-600 border-b-4 active:border-b-0 hover:bg-indigo-500/90",
        superOutline:
          "bg-white text-indigo-500 border-indigo-500 border-2 border-b-4 active:border-b-2 hover:bg-indigo-100",
        sidebar:
          "bg-transparent text-slate-500 border-transparent border-0  hover:bg-slate-100",
        sidebarOutline:
          "bg-sky-500/15 text-sky-500 border-sky-300 border-2 hover:bg-sky-500/20 transition-none",
        ghost:
          "bg-transparent text-slate-500 border-transparent border-0 hover:bg-slate-100",
        locked:
          "bg-neutral-200 text-primary-foreground hover:bg-netural-200/90 border-neutral-400 border-b-4 active:border-b-0",
      },
      size: {
        default: "h-11 px-4 py-2 has-[>svg]:px-3",
        sm: "h-9 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 px-6 has-[>svg]:px-4",
        icon: "size-9",
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
