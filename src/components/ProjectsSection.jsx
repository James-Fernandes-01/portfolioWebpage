import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Robotics BunnyBot",
        description: "Built the intake, and helped on other components, on this \"BunnyBot\"" +
        "for FRC Team 8592's pre-season competition!",
        image: "/projects/BunnyBot.jpg",
        tags: ["Robotics", "OnShape", "Plasma Cutting", "CNC Milling"],
        demoUrl: "#", //live version of website
        
    },

    {
        id: 2,
        title: "First Front-end Website!",
        description: "Based off some tutorials and my own skill. Personalized it on the go!",
        image: "/projects/project2.png",
        tags: ["React", "Tailwind CSS", "HTML/CSS/JS"],
        demoUrl: "#", //live version of website
        githubUrl: "#", //github repo
    },

    {
        id: 3,
        title: "Backend Development",
        description: "Spent some free time learning about backend "+
        "development on Coursera, and earned a certificite in full-stack web development.",
        image: "/projects/project3.png",
        tags: ["Django", "MySQL", "Insomnia"],
        demoUrl: "#", //live version of website
        githubUrl: "#", //github repo
    },

    
    {
        id: 4,
        title: "Drone Build",
        description: "Designed and built drone from scratch." +
        "Competed in the Technology Student Association State competition!",
        image: "/projects/drone.jpg",
        tags: ["Electrical", "Design", "Betaflight"],
        demoUrl: "#", //live version of website
    },

    {
        id: 5,
        title: "Bioprinting Research Project",
        description: "Placed 4th at the Technology Student Association Biotechnology Design challenge! " +
        "My team investigated the processes of bioprinting, and got the chance to speak with Dr. Jihui Li " +
        "and tour his lab, where he 3d-prints models of tumorous organs so surgeons can be more effective and prepared.",
        image: "/projects/bioPrinting.jpg",
        tags: ["Research", "Bioengineering"],
        demoUrl: "#", //live version of project
    }

]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                 Featured <span className="text-primary"> Projects </span>
                 </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Hey there! Take a look at some of the things I have worked on.
                    Each card is associated with some of the skills involved in the project,
                    and a little description on what the project is. BEWARE! I'm still working on the 
                    seperate webpages to showcase each project, so the urls don't function quite yet...
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-60 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full border bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    )
                                )}
                                </div>
                                    <h3 className="text-xl font-semibold mb-6">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-3">
                                            <a href={project.demoUrl}  
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"> <ExternalLink size={20}/></a>
                                            
                                            <a href={project.githubUrl} 
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"> <Github size={20}/></a>
                                        </div>

                                    </div>
                                </div>
                        </div>
                    ))}
                </div>

                {/*<div className="text-center mt-12">
                    <a 
                    className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                    href="#"
                    target="_blank"
                    >
                        Check My Github! <ArrowRight size={16} /> </a>
                </div>*/}

        </div>
    </section>;
};