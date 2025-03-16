import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`${styles.headerContainer} container`}>
                <h4 className={styles.name}>Danilo Nunes Vieira</h4>
                <nav>
                    <ul className={styles.headerNav}>
                        <li><a href="#inicio">Início</a></li>
                        <li><a href="#sobre">Sobre mim</a></li>
                        <li><a href="#experiencias">Experiências</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#habilidades">Habilidades</a></li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}

export default Header;