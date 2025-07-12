"use client"

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";

import { cn } from "@utils";

interface LabelProps extends React.ComponentProps<typeof LabelPrimitive.Root> {
    variant?: "default" | "small";
}

const labelVariants = cva("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", {
    variants: {
        variant: {
            default: "text-sm text-white uppercase w-[80px]",
            small: "text-xs",
        },
    },
});

export const Label = ({ className, variant = "default", ...props }: LabelProps) => {
    return (
        <LabelPrimitive.Root
            data-slot="label"
            className={cn(
                labelVariants({ variant }),
                className
            )}
            {...props}
        />
    )
};
