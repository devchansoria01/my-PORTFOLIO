import { useState } from "react"; // Fixed import

const skills = [
    { name: "HTML/CSS", level: "Advanced", category: "Frontend" },
    { name: "JavaScript", level: "Advanced", category: "Frontend" },
    { name: "React", level: "Advanced", category: "Frontend" },
    { name: "Tailwind CSS", level: "Intermediate", category: "Frontend" },

    { name: "Node.js", level: "Intermediate", category: "Backend" },
    { name: "Express.js", level: "Intermediate", category: "Backend" },
    { name: "MongoDB", level: "Intermediate", category: "Backend" },
    { name: "SQL", level: "Intermediate", category: "Backend" },
    { name: "GraphQL", level: "Beginner", category: "Backend" },

    { name: "Python", level: "Intermediate", category: "Machine Learning" },
    { name: "TensorFlow", level: "Beginner", category: "Machine Learning" },
    { name: "scikit-learn", level: "Beginner", category: "Machine Learning" },
    { name: "Pandas", level: "Intermediate", category: "Machine Learning" },
    { name: "Transformers", level: "Beginner", category: "Machine Learning" },

    { name: "Git/Github", level: "Advanced", category: "Tools" },
    { name: "Docker", level: "Beginner", category: "Tools" },
    { name: "VS Code", level: "Advanced", category: "Tools" },
];

const categories = ["All", "Frontend", "Backend", "Machine Learning", "Tools"];

// Helper to convert string levels to percentage numbers
const getLevelPercentage = (level) => {
    switch (level) {
        case "Advanced": return 90;
        case "Intermediate": return 65;
        case "Beginner": return 35;
        default: return 50;
    }
};

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All"); // Fixed initial state casing

    // Logic to filter skills based on the active button
    const filteredSkills = activeCategory === "All"
        ? skills
        : skills.filter((skill) => skill.category === activeCategory);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                {/* Category Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)} // Added Click Handler
                            className={`px-5 py-2 rounded-md transition-colors ${activeCategory === category
                                    ? "bg-primary text-primary-foreground font-bold" // Active styles
                                    : "bg-card hover:bg-primary/10" // Inactive styles
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-sm card-hover" // Changed shadow-xs to shadow-sm (standard tailwind)
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>

                            {/* Progress Bar Track */}
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                {/* Progress Bar Fill */}
                                <div
                                    className="bg-primary h-2 rounded-full origin-left transition-all duration-1000 ease-out"
                                    style={{ width: `${getLevelPercentage(skill.level)}%` }} // Fixed Width Logic
                                />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skill.level} {/* Display text, but use number for width above */}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};