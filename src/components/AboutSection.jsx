import { Code, User, Bot, ArrowRight} from "lucide-react";

export const AboutSection = () => {
    return( <section id="about"
    className="py-24 px-4 relative"
    >
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate for all things Tech - Mechanical, Electrical, and Software applications</h3>

                    <p className="text-muted-foreground">Take a look at my experience! --{'>'}</p>
                    <p className="text-muted-foreground">
                        Heavily involved in the Technology Student Association (TSA),
                        West Springfield High School (WSHS) Science Olympiad,
                        and FIRST Robotics with Team 8592 (Newton Squared)!
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get In Touch
                            </a>

                            {/*<a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV {/*basically more extensive resume. Could change to just resume later?
                            </a>*/}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6"> 

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Bot className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Robotics Experience </h4>
                                <p className="text-muted-foreground"> Mech, Tech, and Elec(tric). From FRC 
                                    to Science Olympiad, VEX, and the Technology Student Association, I love working with tech!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Software Development </h4>
                                <p className="text-muted-foreground"> Working towards developing various software applications for the web, robotics, and real world problems! </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Leadership Experience </h4>
                                <p className="text-muted-foreground"> As Northern Regional President for the Virginia Technology Student Association (TSA), 
                                    chapter President for WSHS TSA, and Build Team Captain for WSHS SciOly, I have a diverse set of leadership experience
                                    in a technical and scientific fields. </p>
                            </div>
                        </div>
                    </div>

                    

                </div>

            </div>

        </div>
    </section>
    );
};