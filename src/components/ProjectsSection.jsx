import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Drone Build",
        description: "Designed and built drone from scratch.",
        image: "/projects/project1.png",
        tags: ["Electrical", "Design", "Betaflight"],
        demoUrl: "#", //live version of website
        githubUrl: "#", //github repo
    },

    {
        id: 2,
        title: "First Front-end Website",
        description: "Used tutorial for frontend website",
        image: "/projects/project2.png",
        tags: ["React", "Tailwind CSS", "HTML/CSS/JS"],
        demoUrl: "#", //live version of website
        githubUrl: "#", //github repo
    },

    {
        id: 3,
        title: "Backend Development",
        description: "Working on backend design",
        image: "/projects/project3.png",
        tags: ["Django", "MySQL", "Insomnia"],
        demoUrl: "#", //live version of website
        githubUrl: "#", //github repo
    }
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                 Featured <span className="text-primary"> Projects </span>
                 </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Small paragraph. Here are some of my projects! ect ect
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
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