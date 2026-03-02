"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ShieldCheck, Users } from "lucide-react";

const features = [
    {
        icon: <Sparkles className="w-8 h-8 text-primary" />,
        title: "Cutting-Edge Technology",
        description: "Premium equipment calibrated for all skin tones. Latest protocols for maximum safety and visible results."
    },
    {
        icon: <Users className="w-8 h-8 text-primary" />,
        title: "Expert Team",
        description: "Specialized professionals trained in diverse skin types. Personalized consultations and bespoke treatment plans."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        title: "Safe & Proven",
        description: "Medical-grade standards. Real results from real clients. Transformations you can see and feel."
    }
];

export function Features() {
    return (
        <section id="about" className="relative py-32 bg-background overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="eyebrow block mb-6">the glow cycle standard</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight mb-6 text-foreground lowercase"
                    >
                        why experts choose <span className="italic text-foreground/60">glow cycle</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-base md:text-lg text-foreground/50 leading-relaxed font-light max-w-xl mx-auto lowercase"
                    >
                        exceptional treatments and unparalleled care that set the standard for clinical aesthetics in lagos.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">

                    {/* Tall Left Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="bento-card md:col-span-4 min-h-[400px] flex flex-col justify-end"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary to-gray-200 opacity-60 pointer-events-none" />
                        <div className="relative z-10 w-full mb-auto flex justify-center pb-8 opacity-20">
                            <Sparkles className="w-32 h-32 text-foreground" strokeWidth={1} />
                        </div>
                        <h3 className="text-2xl font-serif font-medium mb-4 text-foreground lowercase relative z-10">
                            cutting-edge tech
                        </h3>
                        <p className="text-foreground/50 leading-relaxed text-sm lowercase relative z-10">
                            calibrated for all skin tones. latest protocols for maximum safety and visible results.
                        </p>
                    </motion.div>

                    {/* Middle Column (Stacked) */}
                    <div className="md:col-span-4 grid grid-rows-2 gap-4 md:gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bento-card flex flex-col justify-end bg-primary/10"
                        >
                            <h3 className="text-xl font-serif font-medium mb-2 text-foreground lowercase">
                                trusted by influencers
                            </h3>
                            <p className="text-foreground/40 text-sm lowercase">
                                the secret to the lagos glow.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bento-card flex flex-col justify-center"
                        >
                            <h3 className="text-5xl font-serif font-medium mb-2 text-foreground">
                                200+
                            </h3>
                            <p className="text-foreground/50 text-sm lowercase">
                                verified 5-star reviews
                            </p>
                        </motion.div>
                    </div>

                    {/* Wide Right Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bento-card md:col-span-4 min-h-[400px] flex flex-col overflow-hidden group"
                    >
                        <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                            <Users className="w-64 h-64 text-foreground" strokeWidth={0.5} />
                        </div>
                        <h3 className="text-2xl font-serif font-medium mb-4 text-foreground lowercase w-3/4 relative z-10">
                            expert clinical team
                        </h3>
                        <p className="text-foreground/50 leading-relaxed text-sm lowercase w-3/4 relative z-10">
                            specialized professionals trained in diverse skin types. personalized consultations and bespoke treatment plans tailored specifically to your aesthetic goals.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
