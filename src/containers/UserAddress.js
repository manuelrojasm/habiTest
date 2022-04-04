import Stepper from "../components/Stepper";

import { Card, CardContent, TextField } from "@material-ui/core";
import { useContext } from "react";

import { DataContext } from "../contexts/UserContext";
import Summary from "../components/Summary";

export default function UserAddress() {
  const { address, SetAddress } = useContext(DataContext);

  return (
    <div>
      <div className="content-grid">
        <Card sx={{ minWidth: 5005 }}>
          <CardContent>
            <div className="inputCustom">
              <label>Dirección del apartamento</label>
              <TextField
                id="address"
                variant="outlined"
                className="inputCustom"
                defaultValue={address}
                onChange={(e) => SetAddress(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>
        <div className="resume-rigth">
          <Summary />
        </div>
      </div>
      <Stepper validate={!address} />
    </div>
  );
}
