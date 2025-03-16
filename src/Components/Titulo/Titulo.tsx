import styles from "./Titulo.module.css";

const Titulo = ({titulo} : {titulo : string}) => {
    return (
        <h2 className={styles.titulo}>{titulo}</h2>
    )
}

export default Titulo;