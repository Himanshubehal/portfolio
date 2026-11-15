import styles from "./UpNext.module.css"


const nextProject = {
  name: "Marketplace",
  description: "Sellers list their products, buyers browse and purchase.",
  steps: [
    { text: "Plan the features", done: false },
    { text: "Build the frontend", done: false },
    { text: "Build the backend", done: false },
    { text: "Ship it live", done: false },
  ]
}
const learningNext = ["TypeScript", "Next.js"];



function UpNext(){


    return (
        <section className={`section ${styles.UpNext}`}>
            <h2>Up next on the board</h2>
            <p>What I'm building and learning next</p>
            <div className={styles.frame}>
                <div className={styles.board}>
                    <h3 className={styles.labelYellow}>Next project</h3>
                    <div>
                        <p className={styles.projectName}>{nextProject.name}</p>
                        <p className={styles.projectDesc}>{nextProject.description}</p>
                        <ul className={styles.checklist}>
                            {nextProject.steps.map((step) => (
                                <li key={step.text} className={step.done ? styles.done : ""}>{step.text}</li>
                            ))}
                        </ul>
                    </div>
                    <h3 className={styles.techLearn}>Tech I'm learning next</h3>
                    <ul className={styles.learnList}>
                        {learningNext.map((tech) => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>
                    <p className={styles.stayTuned}>Stay tuned!</p>
                    <span className={styles.eraser}></span>
                </div>
            </div>
        </section>
    )

}


export default UpNext