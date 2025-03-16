import Titulo from "../Titulo/Titulo";
import styles from "./Servico.module.scss";


interface InfosServico {
    icone: string;
    titulo: string;
}

const dadosServico = [
    {icone: './sites.png', titulo: 'Criação de sites'},
    {icone: './designer.png', titulo: 'UI/UX Designer'},
    {icone: './cel.png', titulo: 'Sites responsivos'}
]

const BoxServico = ({icone, titulo} : InfosServico) => {
    return (
        <div className={styles.box}>
            <img src={icone} alt={titulo} />
            <h2>{titulo}</h2>
        </div>
    )
}

const Servico = () => { 


    return (
        <div className={`${styles.boxServico} container`} id="servicos">
            <Titulo titulo="Serviços" />

            <div className={styles.contentBoxes}>
                {dadosServico.map((item,index) => (
                    <BoxServico key={index} icone={item.icone} titulo={item.titulo} />
                ))}
            </div>
        </div>
    )
}

export default Servico;