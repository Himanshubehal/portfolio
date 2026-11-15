import styles from "./Navbar.module.css"


function Navbar() {


    return (
            <header className={styles.header}>
                <div>
                    <a href="#home" className={styles.logo}>Himanshu.</a>
                </div>
                <nav className={styles.nav}>
                    <ul className={styles.navLinks}>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Project</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
    )

}

export default Navbar