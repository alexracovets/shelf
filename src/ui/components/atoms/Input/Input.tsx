"use client";

import * as React from "react";

import { cn } from "@utils";
import { cva } from "class-variance-authority";

const inputVariants = cva(
    "bg-gray-700 text-white rounded-md px-2 py-1", {
    variants: {
        variant: {
            default: "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        },
    },
});

interface InputProps extends React.ComponentProps<"input"> {
    variant?: "default";
}

export const Input = ({ className, type, variant = "default", ...props }: InputProps) => {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                inputVariants({ variant }),
                className
            )}
            {...props}
        />
    )
};