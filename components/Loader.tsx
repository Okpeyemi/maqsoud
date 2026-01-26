"use client";

import { motion } from "framer-motion";

export default function Loader() {
    return (
        <div className="flex items-center justify-center w-full h-full min-h-[50vh]">
            <motion.div
                className="relative w-16 h-16"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute inset-0 border-4 border-neutral-800 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-t-orange-500 rounded-full"></div>
            </motion.div>
        </div>
    );
}
