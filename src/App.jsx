
/*importar modulos*/
import Formulario from "./components/Formularios"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


/*Funcion creadora de la apliacion*/ 
function App() {
return (
 /* Etiqueta padre y el body de la pagina*/  


   <div className="container mx-auto mt-20">
   <Header/>
   <div className="mt-12 md:flex">
     <Formulario />
     <ListadoPacientes />
    </div>
    </div>
  )
 }
/* Export  para importar el modulo a otras partes de la app*/
export default App
