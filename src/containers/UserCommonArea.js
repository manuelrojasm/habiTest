import Stepper from "../components/Stepper";

import {
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import { useContext, useState } from "react";

import { DataContext } from "../contexts/UserContext";

export default function UserCommonArea() {

  const { SetZonabbq, zonabbq, SetSaloncomunal, saloncomunal, SetParquedejuegos, parquedejuegos } = useContext(DataContext);

  return (
    <>
      <div className="content">
        <Card sx={{ minWidth: 5005 }}>
          <CardContent>
            <div className="inputCustom">
              <label>Áreas Comunes</label>
            </div>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={() => SetZonabbq(!zonabbq)}
                  name="zonabbq"
                  color="primary"
                />
              }
              label="Zona BBQ"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={() => SetSaloncomunal(!saloncomunal)}
                  name="saloncomunal"
                  color="primary"
                />
              }
              label="Salón comunal"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={() => SetParquedejuegos(!parquedejuegos)}
                  name="parquedejuegos"
                  color="primary"
                />
              }
              label="Parque de juegos"
            />
          </CardContent>
        </Card>
      </div>
      <Stepper
        validate={zonabbq || saloncomunal || parquedejuegos ? false : true}
      />
    </>
  );
}
