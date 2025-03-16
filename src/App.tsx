import "./App.css"
import Experiencias from "./Components/Experiencias/Experiencias";
import Footer from "./Components/Footer/Footer";
import Habilidades from "./Components/Habilidades/Habilidades";
import Header from "./Components/Header/Header";
import Intro from "./Components/Intro/Intro";
import Servico from "./Components/Servicos/Servico";
import Sobre from "./Components/Sobre/Sobre";

const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <Sobre />
      <Experiencias />
      <Servico />
      <Habilidades />
      <Footer />
    </>
  )
}

export default App;