"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeIn({ children, className = "", delay = 0, direction = "up" }: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const getVariants = (): Variants => {
        const distance = 40;
        const initial: any = { opacity: 0 };

        switch (direction) {
            case "up": initial.y = distance; break;
            case "down": initial.y = -distance; break;
            case "left": initial.x = distance; break;
            case "right": initial.x = -distance; break;
            case "none": break;
        }

        return {
            hidden: initial,
            visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                    duration: 0.8,
                    ease: [0.25, 0.4, 0.25, 1],
                    delay: delay
                }
            }
        };
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={getVariants()}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerContainer({ children, className = "", delay = 0 }: { children: ReactNode, className?: string, delay?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: delay
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};
