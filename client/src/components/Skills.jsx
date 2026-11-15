import styles from "./skills.module.css"

const skills = [
  { name: "HTML", color: "" },
  { name: "CSS", color: "" },
  { name: "JavaScript", color: "blue" },
  { name: "Tailwind", color: "" },
  { name: "React", color: "yellow" },
  { name: "Node.js", color: "" },
  { name: "Express", color: "blue" },
  { name: "MongoDB", color: "" },
  { name: "Git & GitHub", color: "yellow" },
]


function Skills(){

    return (
        <section id="skills" className={`section ${styles.skills}`}>
            <h2>Tech stack</h2>
            <p>Frontend, backend and database tools I use day to day</p>
            <ul className={styles.skillsList}>
                {skills.map((skill) => {
                    return <li key={skill.name} className={styles[skill.color]}>{skill.name}</li>
                })}
            </ul>
        </section>
    )
}

export default Skills