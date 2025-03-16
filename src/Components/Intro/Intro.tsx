import styles from "./Intro.module.scss";

const Intro = () => {

    return (
        <div className={`${styles.introBox} container`} id="inicio">
            <div className={styles.introBoxLeft}>
                <p>Olá, eu sou</p>
                <h2>Danilo</h2>
                <p>Desenvolvedor Frontend</p>
                <button><a href="/danilocv.pdf" target="_blank">Baixar Currículo</a></button>
            </div>
            <img src="/image.png" alt="" />
        </div>
    )
}

export default Intro;