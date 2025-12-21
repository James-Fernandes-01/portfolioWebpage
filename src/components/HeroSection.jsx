import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react"

const bgImages = [
    "/backgrounds/25PreSeasonFRC.jpg",
    "/backgrounds/25TSAStateTeam.jpg",
    "/backgrounds/FRCPlasma.jpg",
    "/backgrounds/HOBY.jpg",
    "/backgrounds/TSAChapterMeeting.jpg",
    "/backgrounds/TSAFallAwards.jpg",
    "/backgrounds/TSAStateOfficers.jpg",
];

export const HeroSection = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(i => (i + 1) % bgImages.length);
        }, 5000); // change image every 6s
        return () => clearInterval(interval);
    }, []);

    return(
    <section id="hero" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        {/* Background slideshow (decorative) */}
        <div aria-hidden className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
            {bgImages.map((src, i) => (
                <img
                    key={src}
                    src={src}
                    alt=""
                    className={
                        "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out transform " +
                        (i === index ? "opacity-100 scale-105" : "opacity-0 scale-100")
                    }
                />
            ))}
            {/* subtle overlay so foreground text remains readable */}
            <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Welcome! I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"><br/> James</span>
                    <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2"> Fernandes</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    As a tech-focused individual, I love spending my free time working on mechanical,
                    electrical, and software projects. With these projects come more questions, driving
                     me to learn more about the fundamentals of STEM. I'm working to
                    expand my horizons and develop my knowledge with textbooks, research, and hands-on experience.
                    Take a look at my previous work, and feel free to reach out!
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
            <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>
    )
}