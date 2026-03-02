import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer id="contact" className="bg-background pt-12 md:pt-24 pb-12 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                {/* The Green Contact Bento */}
                <div className="bg-[#0F2A2E] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-24 flex flex-col md:flex-row justify-between items-start md:items-center text-white mb-16 md:mb-24">
                    <div className="max-w-xl mb-12 md:mb-0">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-4 lowercase tracking-tight">
                            get in touch
                        </h2>
                        <p className="text-white/70 text-sm md:text-base font-light tracking-wide max-w-md lowercase">
                            ready to step into your glow era? leave your email and our experts will reach out to schedule your consultation.
                        </p>
                    </div>

                    <div className="w-full md:w-auto flex flex-col items-start md:items-start md:ml-auto">
                        <span className="text-sm text-white/90 mb-4 lowercase tracking-wider font-medium">contact us</span>
                        <div className="flex w-full md:w-auto items-center gap-2 bg-white/10 p-1.5 rounded-full border border-white/20 backdrop-blur-md">
                            <input
                                type="email"
                                placeholder="enter your email"
                                className="bg-transparent text-white placeholder:text-white/40 px-4 py-2 outline-none w-full md:w-64 text-sm font-light lowercase"
                            />
                            <Button className="rounded-full bg-[#E6F0E9] text-[#0F2A2E] hover:bg-white text-sm px-6 h-10 lowercase font-medium transition-colors">
                                submit
                            </Button>
                        </div>
                        <p className="text-[10px] text-white/40 mt-3 normal-case">
                            By reaching out you agree to our <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a>
                        </p>
                    </div>
                </div>

                {/* Bottom Footer Links Area */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">

                    {/* Brand & Tagline */}
                    <div className="max-w-xs">
                        <span className="block mb-6">
                            <img src="/logo.svg" alt="Glow Cycle Logo" className="h-8 md:h-12 w-auto object-contain mix-blend-multiply" />
                        </span>
                        <p className="text-foreground/40 text-sm font-light leading-relaxed lowercase">
                            make your complicated beauty routine more simple.
                        </p>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 lg:gap-24 w-full md:w-auto">

                        {/* Column 1 */}
                        <div className="flex flex-col gap-4 text-sm">
                            <h4 className="font-medium text-foreground mb-2">Features</h4>
                            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors lowercase">Payment</a>
                            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors lowercase">Card</a>
                            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors lowercase">Pricing</a>
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col gap-4 text-sm">
                            <h4 className="font-medium text-foreground mb-2">Support</h4>
                            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors lowercase">Help</a>
                            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors lowercase">FAQ</a>
                            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors lowercase">Contact</a>
                        </div>

                        {/* Column 3 */}
                        <div className="flex flex-col gap-4 text-sm">
                            <h4 className="font-medium text-foreground mb-2">Legal</h4>
                            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors lowercase">Privacy Policy</a>
                            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors lowercase">Terms of Services</a>
                            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors lowercase">Cookies</a>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}
