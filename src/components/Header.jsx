import Formulario from "./Formulario"
import ListadoPacientes from "./ListadoPacientes"

function Header() {
    return(
        <h1 className="font-black text-5xl text-center md:w-2/4 mx-auto">
            Seguimiento Pacientes {""}
            <span className="text-indigo-600">Veterinaria</span>
        </h1>
    )

}

export default Header;