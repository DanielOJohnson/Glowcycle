"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const testimonials = [
    {
        name: "Chioma Okonkwo",
        treatment: "HydraFacial + Microneedling",
        time: "2 weeks ago",
        quote: "I've tried several clinics in Lagos, but Glow Cycle is exceptional. The HydraFacial treatment completely transformed my skin. After just 3 sessions, my acne scars are noticeably lighter. The staff is professional and the clinic is impeccably clean."
    },
    {
        name: "Amara Aiyetan",
        treatment: "Deep Cleansing Facial",
        time: "1 month ago",
        quote: "Finally found a clinic that understands my skin! As someone with sensitive dark skin, I was skeptical about treatments. But the Glow Cycle team was so knowledgeable and made me feel completely safe. Results are amazing."
    },
    {
        name: "Zainab Musa",
        treatment: "Radiance Renewal Facial",
        time: "2 months ago",
        quote: "Pre-event glow? Glow Cycle has you covered! I came in the day before my wedding and the Radiance Renewal facial gave me exactly the boost I needed. My skin looked incredible on my wedding day."
    }
];

export function Testimonials() {
    return (
        <section className="relative py-32 bg-background overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <span className="eyebrow block mb-6">client stories</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-serif font-medium mb-6 text-foreground lowercase"
                    >
                        real results, <span className="italic text-foreground/60">real women</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-foreground/50 lowercase"
                    >
                        see what our clients have experienced at glow cycle. based on 200+ verified client reviews.
                    </motion.p>
                </div>

                {/* Clean Columns Grid */}
                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((test, idx) => (
                        <motion.div
                            key={test.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bento-card bg-secondary/80 flex flex-col hover:-translate-y-2 transition-transform duration-500 min-h-[400px]"
                        >
                            <div className="flex text-primary mb-8">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 fill-current mr-1" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-foreground/70 leading-relaxed mb-auto text-lg lowercase">
                                "{test.quote}"
                            </p>

                            <div className="mt-8 border-t border-foreground/5 pt-6 flex justify-between items-end">
                                <div>
                                    <h4 className="font-medium text-foreground lowercase">{test.name}</h4>
                                    <p className="text-xs text-foreground/40 mt-1 lowercase">{test.treatment}</p>
                                </div>
                                <span className="text-xs text-foreground/30 lowercase">{test.time}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
