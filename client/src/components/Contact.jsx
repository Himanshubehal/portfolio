import styles from "./Contact.module.css"

const contacts = [
    {name: "GitHub", url: "https://github.com/Himanshubehal"},
    {name: "LinkedIn", url: "https://www.linkedin.com/in/himanshu-behal-3565a5225"}
]


function Contact(){

    return (
        <section className={`section ${styles.contact} `} id="contact">
            <h2>Raise your hand!</h2>
            <p>Open to junior roles and internships. Let's talk</p>
            <a href="mailto:himanshubehal0404@gmail.com" className={styles.emailBtn}>Email me</a>
            <div className={styles.socialLinks}>
                {contacts.map((contact) => (
                    <a href={contact.url} key={contact.name} target="_blank" rel="noreferrer">{contact.name}</a>
                ))}
            </div>
        </section>
    )
}


export default Contact