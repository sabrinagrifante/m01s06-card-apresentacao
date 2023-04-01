import './App.css'
import Card from "./components/Card"

function App() {

  const usuario = {
    nome: "Sabrina Grifante",
    idade: 26,
    foto: "https://avatars.githubusercontent.com/u/125320588?v=4",
    github: "https://github.com/sabrinagrifante",
    linkedin: "https://www.linkedin.com/in/sabrinagrifante/",
  }

  return (
    <div className="App">
      <Card usuario={usuario}/>      
    </div>
  )
}

export default App
