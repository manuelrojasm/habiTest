import { Card, CardContent } from "@material-ui/core";
import { useContext } from "react";

import { DataContext } from "../contexts/UserContext";

import bbq from "../assets/barbecue.png";
import playground from "../assets/playground.png";
import salon from "../assets/salon.png";

export default function Summary() {
  const userContext = useContext(DataContext);
  console.log(userContext);
  return (
    <div>
      <Card className="resume">
        <CardContent>
          <h1>Resumen: </h1>
          <div className="resume-item">
            <label>Nombre y Apellido: </label>
            <h3>{userContext.name}</h3>
          </div>
          <div className="resume-item">
            <label>Correo: </label>
            <h3>{userContext.email}</h3>
          </div>
          <div className="resume-item">
            <label>Dirección: </label>
            <h3>{userContext.address}</h3>
          </div>
          <div className="resume-item">
            <label>Piso: </label>
            <h3>{userContext.floor}</h3>
          </div>
          <div className="resume-item">
            <label>Áreas Comunes: </label>
            <div>
              {userContext.zonabbq && <img src={bbq} width={40} height={40} />}
              {userContext.saloncomunal && <img src={salon} width={40} height={40} />}
              {userContext.parquedejuegos && <img src={playground} width={40} height={40} />}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
