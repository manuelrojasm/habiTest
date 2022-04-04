//Componentes
import Data from "../containers/UserData"
import Email from "../containers/UserEmail"
import Address from "../containers/UserAddress"
import Floor from "../containers/UserFloor"
import CommonArea from "../containers/UserCommonArea"
import Resume from "../containers/UserResume"

export const ROUTES = [
  {
    path: "datos-cliente",
    name: "nombre y apellido",
    optional: false,
    component: <Data/>,
    order: 1,
    description: "Primer paso: Nombre y apellidos en un solo campo",
  },
  {
    path: "email-cliente",
    name: "email",
    optional: false,
    component: <Email/>,
    order: 2,
    description: "Segundo paso: Correo solo deben permitirse correos válidos",
  },
  {
    path: "direccion-cliente",
    name: "direccion",
    optional: false,
    component: <Address/>,
    order: 3,
    description: "Tercer paso: Dirección del apartamento",
  },
  {
    path: "planta-cliente",
    name: "pisos",
    optional: false,
    component: <Floor/>,
    order: 4,
    description: "Cuarto paso: Un campo que me permita elegir el número de piso donde se encuentra mi apartamento, el usuario máximo puede poner 50",
  },
  {
    path: "areas-cliente",
    name: "areas comunes",
    optional: true,
    component: <CommonArea/>,
    order: 5,
    description: "Quinto paso: Unos checkbox que me digan si el apartamento tiene alguna de las siguientes opciones: Zona BBQ, salón comunal, parque de juegos",
  },
  {
    path: "resumen",
    name: "resumen",
    optional: false,
    component: <Resume/>,
    order: 6,
    description: " Último paso: presentar el resumen de los datos que puso el usuario en el paso anterior",
  }
];
