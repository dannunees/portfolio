import Titulo from "../Titulo/Titulo";
import styles from "./Sobre.module.scss";

interface InfoProps {
    url: string;
    titulo: string;
    info: string;
}

const dados = [
    { url: '/smile.png' , titulo: 'Nome', info: 'Danilo'},
    { url: '/mail.png' , titulo: 'E-mail', info: 'danilonunesvieira@gmail.com'},
    { url: '/instagram.png' , titulo: 'Instagram', info: '@dannunees'},
    { url: '/phone.png' , titulo: 'Telefone', info: '(11) 95243-2448'},
]

const Info = ({url, titulo, info} : InfoProps) => {
    return (
        <div className={styles.infos}>
            <div className={styles.icone}>
                <img src={url} alt={titulo} />
            </div>
            <h4>{titulo}</h4>
            <p>{info}</p>
        </div>
    )
}

const Sobre = () => {
    
    return (
        <div className={`${styles.sobreBox} container`} id="sobre">
            <Titulo titulo="Sobre mim" />
            <p>Olá, sou Danilo, desenvolvedor de software em React e TypeScript para a construção de sistemas e aplicativos escaláveis.</p>

            <p>Sou apaixonado por criar interfaces modernas e responsivas, garantindo alto desempenho, acessibilidade e facilidade de manutenção. Além disso, tenho experiência no desenvolvimento de temas personalizados no WordPress, criando soluções sob medida para diferentes projetos.</p>

            <p>No backend, utilizo PHP para WordPress e outras tecnologias para integrar APIs e otimizar a performance das aplicações. Meu foco é desenvolver soluções intuitivas e eficientes, aplicando boas práticas de desenvolvimento para entregar produtos de qualidade.</p>

            <div className={styles.sobreInfos}>
                {dados.map((item, index) => (
                    <Info key={index} url={item.url} titulo={item.titulo} info={item.info} />
                ))}
            </div>

        </div>
    )
}

export default Sobre;