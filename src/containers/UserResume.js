import Stepper from "../components/Stepper";

import { useContext } from "react";

import { DataContext } from "../contexts/UserContext";
import Summary from "../components/Summary";

export default function UserResume() {
  const { SetFloor } = useContext(DataContext);

  return (
    <>
      <div className="content">
        <Summary />
      </div>
      <Stepper validate={false} />
    </>
  );
}
