import style from "./Hero.module.css"


function Hero() {


    return (
        <section id="home" className={style.hero}>
            <div className={style.heroText}>
                <p className={style.greet}>Open to internships and junior roles</p>
                <h1>Hi, I'm Himanshu Behal</h1>
                <p className={style.role}>Junior MERN & React Developer</p>
                <p className={style.discription}>Self-taught developer from Chandigarh. I build clean, working web apps with React, Node and MongoDB</p>
                <div className={style.homeBtn}>
                    <a href="#projects" className={style.btnProject}>See my projects</a>
                    <a href="#contact" className={style.btnContact}>Say hello</a>
                </div>
            </div>
            <div className={style.heroNote}>
                <div className={style.stickyNote}>
                    <span className={style.tape}></span>
                    <h3 className={style.stickyHeading}>Today's lesson</h3>
                    <p className={style.stickyDiscription}>I build simple web apps that solve real problems, and i understand every line</p>
                    <span className={style.stamp}>A+</span>
                </div>
            </div>
        </section>
    )
}

export default Hero