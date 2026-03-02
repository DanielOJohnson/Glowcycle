import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "glass"
    size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", ...props }, ref) => {
        const baseStyles = "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]"
        const variants = {
            primary: "bg-foreground text-background hover:bg-foreground/90 shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-0.5 transition-all",
            secondary: "bg-white text-foreground hover:bg-gray-50 shadow-sm border border-black/5 hover:border-black/10 transition-all",
            outline: "border border-foreground/20 bg-transparent hover:bg-foreground hover:text-background",
            ghost: "hover:bg-foreground/5",
            glass: "glass-panel hover:bg-white/60 text-foreground transition-all",
            link: "text-primary underline-offset-4 hover:underline",
        }
        const sizes = {
            default: "h-12 px-8 py-2 text-sm",
            sm: "h-9 px-4 text-xs",
            lg: "h-14 px-10 text-base font-semibold",
            icon: "h-12 w-12",
        }

        return (
            <button
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            >
                {props.children}
            </button>
        )
    }
)
Button.displayName = "Button"

export { Button }
