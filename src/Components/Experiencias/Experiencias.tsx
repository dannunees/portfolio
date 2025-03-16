import { useState } from "react";
import Titulo from "../Titulo/Titulo";
import styles from "./Experiencias.module.scss";

const Experiencias = () => {

    const exp = [
        {
            empresa: 'MZ Group',
            cargo: 'Desenvolvedor Frontend Pleno',
            tarefas: 'Atuo como desenvolvedor frontend em projetos de criação e customização de temas para WordPress, focando na construção de soluções responsivas e personalizáveis, proporcionando uma experiência de usuário otimizada para diferentes plataformas. Minha principal responsabilidade foi o desenvolvimento de temas WordPress escaláveis, com ênfase em usabilidade e desempenho, atendendo às necessidades de clientes de diversos segmentos.',
            periodo: '2024 - Atual'
        },
        {
            empresa: 'Pluxee',
            cargo: 'Desenvolvedor Frontend Pleno',
            tarefas: 'Atuei como desenvolvedor frontend em um projeto de cartões-benefício 3C e 4C, incluindo alimentação, refeição, gift e outros modelos. Minha principal responsabilidade foi o desenvolvimento e aprimoramento de um sistema de backoffice para uso interno e externo, permitindo o acesso de atendentes e facilitando a gestão de milhões de clientes.',
            periodo: '2022 - 2024'
        },
        {
            empresa: 'Avon',
            cargo: 'Desenvolvedor Frontend Pleno',
            tarefas: 'Atuei como desenvolvedor frontend na criação de páginas e landing pages para o site da Avon, com foco em páginas de produtos, vendas, campanhas promocionais, revistas digitais e portais B2B/B2C. Minha principal responsabilidade foi transformar requisitos de marketing e produto em páginas dinâmicas, responsivas e otimizadas para conversão, colaborando estreitamente com equipes de design e marketing para garantir a melhor experiência do usuário e impulsionar os objetivos de negócios.',
            periodo: '2021 - 2022'
        },
        {
            empresa: 'MZ Group',
            cargo: 'Desenvolvedor Frontend',
            tarefas: 'Tive a oportunidade de iniciar minha jornada como desenvolvedor frontend júnior, focando principalmente na manutenção de sites prontos e na criação de páginas específicas. Minhas responsabilidades incluíam realizar ajustes e correções em sites existentes, além de colaborar com a equipe para implementar pequenas funcionalidades e otimizações. Trabalhei no aprimoramento da estrutura de sites WordPress, ajustando templates e contribuindo para a criação de páginas de produtos e campanhas promocionais, sempre com foco em garantir uma boa experiência do usuário e a performance dos sites.',
            periodo: '2019 - 2021'
        },
    ]

    const[activeIndex, setActiveIndex] = useState<number | null>(null);

    function handleClick(index:number) {
        setActiveIndex(index);
        console.log('active', activeIndex)
    }

    return (
        <div className={`${styles.boxExperiencias} container`} id="experiencias">
            <Titulo titulo="Experiências" />

            <div className={styles.boxContent}>

                <div className={styles.boxLeft}>
                    <ul>
                        {exp.map((item,index) => (
                            <li className={activeIndex === index ? styles.active : ''} onClick={() => handleClick(index)} key={index}>{item.empresa}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.boxRight}>
                    {activeIndex !== null && (
                        <div>
                            <h3 className={styles.empresa}>{exp[activeIndex].empresa}</h3>
                            <p className={styles.cargo}><strong>Cargo:</strong> {exp[activeIndex].cargo}</p>
                            <p className={styles.tarefas}><strong>Tarefas:</strong> {exp[activeIndex].tarefas}</p>
                            <p className={styles.periodo}><strong>Período:</strong> {exp[activeIndex].periodo}</p>
                        </div>
                    )}
                    {activeIndex === null && <p>Selecione uma experiência para ver os detalhes.</p>}
            
                </div>

            </div>
        </div>
    )
}

export default Experiencias;