//Componentes
import Data from "../components/UserData"
import Email from "../components/UserEmail"
import Address from "../components/UserAddress"
import Floor from "../components/UserFloor"
import CommonArea from "../components/UserCommonArea"
import Resume from "../components/UserResume"

export const ROUTES = [
  {
    path: "datos-cliente",
    component: <Data/>,
    order: 1,
    description: "Primer paso: Nombre y apellidos en un solo campo",
  },
  {
    path: "email-cliente",
    component: <Email/>,
    order: 2,
    description: "Segundo paso: Correo solo deben permitirse correos válidos",
  },
  {
    path: "direccion-cliente",
    component: <Address/>,
    order: 3,
    description: "Tercer paso: Dirección del apartamento",
  },
  {
    path: "planta-cliente",
    component: <Floor/>,
    order: 4,
    description: "Cuarto paso: Un campo que me permita elegir el número de piso donde se encuentra mi apartamento, el usuario máximo puede poner 50",
  },
  {
    path: "areas-cliente",
    component: <CommonArea/>,
    order: 5,
    description: "Quinto paso: Unos checkbox que me digan si el apartamento tiene alguna de las siguientes opciones: Zona BBQ, salón comunal, parque de juegos",
  },
  {
    path: "resumen-cliente",
    component: <Resume/>,
    order: 6,
    description: " Último paso: presentar el resumen de los datos que puso el usuario en el paso anterior",
  }
];
