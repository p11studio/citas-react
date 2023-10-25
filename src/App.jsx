import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import Formulario from "./components/formulario"


function App() {
 
const edad = 18

  return (
    
    <div className="container mx-auto mt-20">
      <Header />
      <Formulario />
      <ListadoPacientes />
    </div>
  )
}

export default App
