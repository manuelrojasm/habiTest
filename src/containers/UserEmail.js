import Stepper from "../components/Stepper";

import { Card, CardContent, TextField } from "@material-ui/core";
import { useContext } from "react";

import { DataContext } from "../contexts/UserContext";


export default function UserEmail() {

  const { email, SetEmail } = useContext(DataContext);

  return (
    <div>
      <div className="content">
        <Card sx={{ minWidth: 5005 }}>
          <CardContent>
            <div className="inputCustom"> 
              <label>Correo</label>
              <TextField type="email" id="email" variant="outlined" className="inputCustom" onChange={e => SetEmail(e.target.value)}/>
            </div>
          </CardContent>
        </Card>
      </div>
      <Stepper validate={!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)}/>
    </div>
  );
}
