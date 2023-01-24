
/*importar modulos*/
import Formulario from "./components/Formularios"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState } from "react"

/*Funcion creadora de la apliacion*/ 
function App() {
  const[pacientes, setPacientes] = useState([]);
  //extraer valores con la tarjeta para editar y eliminar
  const[paciente,setPaciente] = useState ({});

return (
 /* Etiqueta padre y el body de la pagina*/  
   <div className="container mx-auto mt-20">
   <Header/>
   <div className="mt-12 md:flex">
     <Formulario 
       pacientes = {pacientes}
       setPacientes = {setPacientes}
       paciente = {paciente}
     />

     <ListadoPacientes 
      pacientes = {pacientes}
      setPaciente = {setPaciente}
     />
    </div>
  </div>
  )
 }
/* Export  para importar el modulo a otras partes de la app*/
export default App
