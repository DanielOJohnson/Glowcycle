"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const services = [
    {
        title: "Vitality Hydration Therapy",
        duration: "45 mins",
        price: "$150",
        description: "Restores moisture and repairs skin barrier.",
    },
    {
        title: "Deep Cleansing / Acne Facial",
        duration: "45-60 mins",
        price: "$165",
        description: "Deep pore cleansing for acne-prone skin.",
    },
    {
        title: "Diamond / Brightening Glow Facial",
        duration: "45-60 mins",
        price: "$175",
        description: "Improves dullness and uneven skin tone.",
    },
    {
        title: "Radiance Renewal Facial",
        duration: "60 mins",
        price: "$195",
        description: "Our signature comprehensive facial treatment.",
        featured: true,
    },
    {
        title: "HydraFacial",
        duration: "45-60 mins",
        price: "$180",
        description: "Advanced hydration and rejuvenation treatment.",
    },
    {
        title: "Microneedling",
        duration: "45-60 mins",
        price: "$220",
        description: "Collagen-inducing treatment for texture and scars.",
    }
];

export function Services() {
    return (
        <section id="services" className="relative py-32 bg-secondary/30 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10 mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <span className="eyebrow block mb-6">our signature collection</span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 text-foreground lowercase tracking-tight"
                        >
                            precision treatments.<br />
                            <span className="text-foreground/40">flawless execution.</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="pb-4"
                    >
                        <Button variant="outline" className="rounded-full rounded-full">Explore Menu</Button>
                    </motion.div>
                </div>
            </div>

            {/* Apple-style horizontal scroll container */}
            <div className="w-full relative">
                {/* Fade masks for edges */}
                <div className="absolute top-0 bottom-0 left-0 w-8 md:w-24 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(235, 235, 230, 0.8), transparent)' }} />
                <div className="absolute top-0 bottom-0 right-0 w-8 md:w-24 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" style={{ background: 'linear-gradient(to left, rgba(235, 235, 230, 0.8), transparent)' }} />

                <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 px-6 md:px-24 pb-12 pt-4">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="snap-center shrink-0 w-[85vw] md:w-[500px] h-[500px] bento-card bg-white flex flex-col justify-between group cursor-pointer hover:shadow-xl transition-all duration-500"
                        >
                            <div className="flex justify-between items-start">
                                {service.featured && (
                                    <span className="text-[10px] uppercase tracking-widest font-bold bg-primary/10 text-primary px-4 py-2 rounded-full">
                                        Signature
                                    </span>
                                )}
                                {!service.featured && <div />}
                                <span className="text-sm font-medium text-foreground/40 lowercase">{service.duration}</span>
                            </div>

                            <div className="mt-auto">
                                <h3 className="text-3xl font-serif font-medium mb-4 group-hover:text-primary transition-colors duration-300 lowercase">{service.title}</h3>
                                <p className="text-foreground/50 font-light mb-8 max-w-sm leading-relaxed text-lg lowercase">
                                    {service.description}
                                </p>

                                <div className="flex items-center justify-between border-t border-foreground/5 pt-6">
                                    <span className="text-2xl font-serif text-foreground">{service.price}</span>
                                    <Button variant="ghost" className="text-primary hover:text-primary-foreground group/btn overflow-hidden relative rounded-full">
                                        <span className="relative z-10 flex items-center gap-2">
                                            book now
                                            <span className="font-sans font-light -translate-x-2 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100 transition-all duration-300 ease-out text-xl">
                                                &rarr;
                                            </span>
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
