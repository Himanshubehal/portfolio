import styles from "./Footer.module.css"



function Footer(){


    return (
        <section className={styles.footer}>
            <div className={styles.chalks}>
                <span className={styles.chalkWhite}></span>
                <span className={styles.chalkYellow}></span>
                <span className={styles.chalkPink}></span>
                <span className={styles.eraser}></span>
            </div>
            <div className={styles.footerDesc}>
                <p>© 2026 Himanshu Behal · Built with React</p>
            </div>
        </section>
    )
}



export default Footer