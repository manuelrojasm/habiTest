import Stepper from "../components/Stepper";

import { Card, CardContent, TextField } from "@material-ui/core";
import { useContext } from "react";

import { DataContext } from "../contexts/UserContext";

export default function UserFloor() {
  const { SetFloor } = useContext(DataContext);

  return (
    <>
      <div className="content">
        <Card sx={{ minWidth: 5005 }}>
          <CardContent>
            <div className="inputCustom">
              <label>Piso</label>
              <TextField
                id="floor"
                InputProps={{ inputProps: { min: 1, max: 50 } }}
                type="number"
                defaultValue={1}
                variant="outlined"
                className="inputCustom"
                onChange={(e) => SetFloor(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>
      </div>
      <Stepper validate={false} />
    </>
  );
}
