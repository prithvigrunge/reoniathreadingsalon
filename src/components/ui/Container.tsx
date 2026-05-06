import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "small" | "large" | "full";
}

export default function Container({ 
  children, 
  className, 
  size = "default" 
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-12 xl:px-16",
        {
          "max-w-7xl": size === "default",
          "max-w-5xl": size === "small",
          "max-w-[1440px]": size === "large",
          "max-w-none": size === "full",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
