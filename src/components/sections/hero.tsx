"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const words = ["beauty", "skin", "glow"];

export function Hero() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 3000); // Change word every 3 seconds

        return () => clearInterval(interval);
    }, []);
    return (
        <section className="relative min-h-screen pt-32 pb-12 overflow-hidden bg-background">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col h-full min-h-[85vh]">

                {/* Top Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 flex flex-col justify-center mb-12"
                >
                    <h1 className="heading-display max-w-5xl flex flex-wrap items-center">
                        radiant
                        <span className="inline-grid [grid-template-areas:'stack'] ml-4 h-[1em] overflow-hidden italic text-foreground/70 -translate-y-[2px]">
                            <AnimatePresence mode="popLayout">
                                <motion.span
                                    key={words[currentWordIndex]}
                                    initial={{ y: "150%", opacity: 0 }}
                                    animate={{ y: "0%", opacity: 1 }}
                                    exit={{ y: "-150%", opacity: 0 }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="[grid-area:stack]"
                                >
                                    {words[currentWordIndex]},
                                </motion.span>
                            </AnimatePresence>
                        </span>
                        <div className="w-full h-0"></div> {/* forces line break securely on flex flow */}
                        within your reach
                    </h1>
                    <div className="mt-8 flex justify-end w-full max-w-5xl">
                        <p className="text-sm md:text-base text-foreground/50 max-w-sm text-right lowercase leading-relaxed">
                            discover cutting-edge aesthetic treatments tailored for all skin tones. experience luxury clinical care.
                        </p>
                    </div>
                </motion.div>

                {/* Bottom Bento Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-3 mt-auto">

                    {/* Bento Card 1: Scheduling (Primary Action) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bento-card md:col-span-6 !bg-[#0F2A2E]/90 !text-[white] h-[100px] md:h-auto md:min-h-[300px] flex flex-row md:flex-col items-center md:items-start justify-start md:justify-between group cursor-pointer transition-all duration-500 !p-6 md:!p-10 text-left gap-4 md:gap-0 relative overflow-hidden"
                    >
                        <Heart fill="white" className="text-white w-8 h-8 md:w-16 md:h-16 shrink-0 transform scale-110 transition-transform duration-700 ease-out" />

                        <div className="flex flex-col gap-0.5 md:gap-2 z-10 w-full mt-auto">
                            <h3 className="text-lg md:text-5xl font-serif leading-none tracking-tight lowercase">book an appointment</h3>
                            <p className="text-xs md:text-sm text-white/50 font-medium tracking-[0.1em] md:tracking-[0.15em] uppercase">get instant beauty services</p>
                        </div>

                        {/* Hover Arrow indicator - luxury interaction touch */}
                        <div className="hidden md:flex absolute top-10 right-10 w-12 h-12 rounded-full border border-white/20 items-center justify-center backdrop-blur-sm opacity-100 transform translate-y-0 transition-all duration-500">
                            <span className="text-xl">↗</span>
                        </div>
                    </motion.div>

                    {/* Bento Card 2: Team/Visual */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bento-card md:col-span-4 h-[100px] md:h-auto md:min-h-[300px] flex flex-row md:flex-col items-center md:items-start justify-between overflow-hidden group cursor-pointer text-white relative !p-6 md:!p-10"
                        style={{
                            backgroundImage: 'url("/hero-expert-portrait.png")',
                            backgroundSize: 'cover',
                            backgroundPosition: '100% 20%', /* Adjusted slightly to keep face visible if tall */
                        }}
                    >
                        {/* Gradient Overlay for Readability */}
                        <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-t md:from-black/80 md:via-black/20 md:to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />

                        <h3 className="text-xl md:text-2xl font-serif relative z-10 lowercase w-2/3 md:w-full">meet our experts</h3>
                        <div className="relative z-10 hidden md:flex justify-between items-end mt-auto w-full">
                            <span className="text-sm opacity-90 lowercase">discover</span>
                            <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform font-bold">↗</span>
                        </div>
                        <div className="md:hidden relative z-10 flex transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0">
                            <span className="text-2xl opacity-80">↗</span>
                        </div>
                    </motion.div>

                    {/* Bento Card 3: Info/ Secondary Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bento-card md:col-span-2 bg-[#E6F0E9] text-foreground h-[100px] md:h-auto md:min-h-[300px] flex flex-row md:flex-col items-center md:items-start justify-between group cursor-pointer hover:bg-[#DCE8E0] transition-colors !p-6 md:!p-10"
                    >
                        <h3 className="text-xl md:text-xl font-serif lowercase leading-tight">download the app</h3>

                        <div className="hidden md:flex flex-1 items-center justify-center py-0 w-full">
                            <div className="transform group-hover:scale-105 transition-transform duration-500">
                                <img src="/glow-cycle-qr-code.png" alt="Download App QR Code" className="w-48 h-48 object-contain mix-blend-multiply opacity-90" />
                            </div>
                        </div>

                        <div className="hidden md:flex justify-between items-end mt-auto w-full">
                            <span className="text-sm opacity-60 lowercase">scan to install</span>
                            <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-60 font-bold">↗</span>
                        </div>
                        <div className="md:hidden flex transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0">
                            <span className="text-2xl opacity-60">↗</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
