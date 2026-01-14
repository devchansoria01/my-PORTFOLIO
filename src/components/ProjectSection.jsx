import { ArrowRight, ExternalLink, Github } from "lucide-react"


const projects = [
    {
        id: 1,
        title: "Magnet : Web-D project",
        description: "All in one platform for NSUT students to access resources, compete, etc.",
        image: "/projects/project1.png",
        tags: ["React Js", "Node Js", "Python"],
        projUrl: "https://nsutmagnet.tech/",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "AQI prediction : ML Project",
        description: "Predicted AQI using different ML models and compared their performances.",
        image: "/projects/aqi.png",
        tags: ["python", "transformers"],
        projUrl: "https://aqi-prediction-dashboard.netlify.app/",
        githubUrl: "https://github.com/devchansoria01/aqi-Prediction-dashboard/tree/main/Backend"
    },
    {
        id: 3,
        title: "myChatBot : Gen ai Project",
        description: "Integrated API's for text and iamge generation to create a chatbot.",
        image: "/projects/chatBot.png",
        tags: ["Python", "FASTAPI", "OpenAI"],
        projUrl: "https://mychatbot-c7zz.onrender.com/",
        githubUrl: "#"
    },

]

const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Featured
                    <span className='text-primary'>
                        Projects
                    </span>
                </h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    A selection of projects showcasing my skills and experience. Each project includes a brief description, technologies used, and links to live demos or source code repositories.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'
                        >
                            <div className='h-48 overflow-hidden'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>

                                <div className="flex justify-between items-center">
                                    <div className="flex  space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                        target="_blank"
                        href="https://github.com/devchansoria01"
                    >
                        Check my github <ArrowRight size = {16} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection
