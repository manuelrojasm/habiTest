import Stepper from "../components/Stepper";

import { Card, CardContent, TextField } from "@material-ui/core";
import { useContext } from "react";

import { DataContext } from "../contexts/UserContext";

export default function UserAddress() {
  const { address, SetAddress } = useContext(DataContext);

  return (
    <div>
      <div className="content">
        <Card sx={{ minWidth: 5005 }}>
          <CardContent>
            <div className="inputCustom">
              <label>Dirección del apartamento</label>
              <TextField
                id="address"
                variant="outlined"
                className="inputCustom"
                onChange={(e) => SetAddress(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>
      </div>
      <Stepper validate={!address} />
    </div>
  );
}
