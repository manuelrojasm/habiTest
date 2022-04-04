import Stepper from "../components/Stepper";

import { Card, CardContent, TextField } from "@material-ui/core";
import { useContext } from "react";

import { DataContext } from "../contexts/UserContext";

export default function UserData() {
  
  const { name, SetName } = useContext(DataContext);

  return (
    <>
      <div className="content">
        <Card sx={{ minWidth: 5005 }}>
          <CardContent>
            <div className="inputCustom">
              <label>Nombres y Apellidos</label>
              <TextField
                id="name"
                variant="outlined"
                className="inputCustom"
                onChange={(e) => SetName(e.target.value )}
              />
            </div>
          </CardContent>
        </Card>
      </div>
      <Stepper validate={!name} />
    </>
  );
}
