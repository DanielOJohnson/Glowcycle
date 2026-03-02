"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "./button";

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className="fixed top-6 left-0 right-0 z-50 transition-all duration-300 pointer-events-none pb-2 pt-2 bg-transparent"
        >
            <div className="container mx-auto px-6 lg:px-12">
                <div className="w-full bg-[#F4F4F0] border border-black/5 rounded-[14px] shadow-sm px-4 md:px-6 py-3 flex items-center justify-between pointer-events-auto">
                    {/* Logo Area */}
                    <a href="#" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
                        <img src="/logo.svg" alt="Glow Cycle Logo" className="h-5 w-auto object-contain" />
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        <a href="#" className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors">Home</a>
                        <a href="#services" className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors">Consultation</a>
                        <a href="#about" className="text-sm font-medium text-foreground flex items-center gap-1 hover:text-foreground/70 transition-colors">
                            Services
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50">
                                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="#contact" className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors">Contact</a>
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <Button className="bg-[#0f2a2e] text-white hover:bg-[#0f2a2e]/90 shadow-sm rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] rounded-tl-[8px] px-6 flex items-center gap-2" size="sm">
                            Book Appointment
                        </Button>
                    </div>

                    {/* Mobile menu toggle */}
                    <button
                        className="md:hidden text-foreground p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-white/10 p-6 flex flex-col gap-6 md:hidden shadow-xl">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-foreground hover:text-primary"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                    <Button variant="primary" className="w-full">
                        Book Appointment
                    </Button>
                </div>
            )}
        </header>
    );
}
