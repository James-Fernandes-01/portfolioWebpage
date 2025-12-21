import { ArrowDown } from "lucide-react"

export const HeroSection = () => {

    return(
    <section id="hero" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
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

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>
    )
}