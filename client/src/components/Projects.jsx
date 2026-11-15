import styles from "./Projects.module.css"

const projects = [
    { name: "Code Playground", description: "Browser code editor with live preview and login to save your work", stack: ["React", "Node.js", "Express", "MongoDB"], live: "https://code-playground-indol-sigma.vercel.app", github: "https://github.com/Himanshubehal/code-playground", tape: "yellow", tilt: "tiltLeft" },
    {
        name: "Ask the Cafe", description: "AI chat assistant that answers customer questions about a cafe's menu and timings.",
        stack: ["React", "Node.js", "Express", "MongoDB", "Gemini API"],
        live: "https://cafe-ai-assistant-three.vercel.app",
        github: "https://github.com/Himanshubehal/cafe-ai-assistant",
        tape: "pink",
        tilt: "tiltRight",
    }
]



function Projects() {
    return (
        <section id="projects" className={`section ${styles.project}`}>
            <h2>Projects</h2>
            <p>Full-Stack apps that are live and working</p>
            <div className={styles.grid}>
                {
                    projects.map((project) => {
                      return  <article key={project.name} className={`${styles.paper} ${styles[project.tilt]}`}>
                            <span className={`${styles[project.tape]} ${styles.tape}`}></span>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <ul className={styles.stack}>
                                {project.stack.map((tech) => {
                                  return  <li key={tech}>{tech}</li>
                                })}
                            </ul>
                            <div className={styles.links}>
                                <a href={project.live} target="_blank" rel="noreferrer">Live demo</a>
                                <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                            </div>
                        </article>
                    })
                }
            </div>
        </section>
    )

}

export default Projects