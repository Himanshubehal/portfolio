import styles from "./About.module.css"


function About(){
    return (
        <section id="about" className={`section ${styles.about}`}>
            <h2>About me</h2>
            <p>I got into coding by trying to build a billing software for my own cafe. That one project turned into for web development. Now i learn something new every day and build projects to prove it.</p>
        </section>
    )
}

export default About