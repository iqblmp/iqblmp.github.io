import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

// const buttonVariants = cva(
//     "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
//     {
//         variants: {
//             variant: {
//                 default: "bg-primary text-primary-foreground hover:bg-primary/90",
//                 destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
//                 outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
//                 secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
//                 ghost: "hover:bg-accent hover:text-accent-foreground",
//                 link: "text-primary underline-offset-4 hover:underline",
//             },
//             size: {
//                 default: "h-[54px] px-6 py-2 min-w-[166px]",
//                 sm: "h-9 rounded-md px-3",
//                 lg: "h-11 rounded-md px-8",
//                 icon: "h-10 w-10",
//             },
//         },
//         defaultVariants: {
//             variant: "default",
//             size: "default",
//         },
//     }
// );
const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium ring-offset-background  transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                // Default: Gradient button (Blue to Teal)
                default: "bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:from-teal-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105",

                // Destructive: Red background (for delete or important actions)
                destructive: "bg-red-600 text-white hover:bg-red-700 transition-all duration-300 transform hover:scale-105",

                // Outline: Transparent background with border, with hover effect
                outline: "border border-input bg-transparent text-primary hover:bg-accent hover:text-accent-foreground transition-all duration-200",

                // Secondary: Softer background, typically used for secondary actions
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300",

                // Ghost: Transparent background with hover effect, minimalistic
                ghost: "bg-transparent text-primary hover:bg-accent hover:text-accent-foreground transition-all duration-200",

                // Link: Styled like a link (underlined text)
                link: "text-primary underline-offset-4 hover:underline transition-all duration-200",
            },
            size: {
                default: "h-[54px] px-6 py-2 min-w-[166px]",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default", // Default to the gradient button
            size: "default", // Default to default size
        },
    }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
