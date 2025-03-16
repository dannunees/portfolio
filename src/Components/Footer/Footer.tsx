import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer>
            <div className={`${styles.footer} container`}>
                <p>@ 2025 - Danilo Nunes Vieira</p>
                <p>Powered by</p>
            </div>
        </footer>

    )
}

export default Footer;