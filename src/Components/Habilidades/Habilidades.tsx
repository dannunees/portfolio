
import Titulo from "../Titulo/Titulo";
import styles from "./Habilidades.module.scss";


interface InfoHabilidades {
   url: string;
   descricao: string;
}

const dadosImg = [
    {url:'/html.png', descricao:'HTML'},
    {url:'/css.png', descricao:'CSS'},
    {url:'/js.png', descricao:'Javascript'},
    {url:'/tailwind.png', descricao:'Tailwind'},
    {url:'/react.png', descricao:'React'},
    {url:'/next.png', descricao:'Next'}
]

const BoxHabilidades = ({url, descricao} : InfoHabilidades) => {
    return (
        <div className={styles.boxHabilidades}>
            <img src={url} alt={descricao} />
        </div>
    )
}

const Habilidades = () => {

    return (
        <div className={`${styles.habilidades} container`} id="habilidades">
            <Titulo titulo="Habilidades" />
            <div className={styles.infosHabilidades}>

                {dadosImg.map((item,index) => (
                    <BoxHabilidades key={index} url={item.url} descricao={item.descricao} />
                ))}

            </div>
        </div>
    )
}

export default Habilidades;