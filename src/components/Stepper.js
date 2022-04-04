import React from "react";
import { Button, Step, StepLabel, Stepper } from "@material-ui/core";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../contexts/UserContext";
import Swal from "sweetalert2";

export default function StepperCustom({ validate }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { routes } = useContext(DataContext);

  const routeActual = routes.filter(
    (route) => route.path == pathname.substring(1)
  )[0];

  const step = routeActual.order - 1;

  const handleNext = () => {
    let route = routes[step + 1]?.path;
    if (route) {
      navigate("/" + routes[step + 1].path);
    } else {
      Swal.fire({
        icon: "success",
        title: "Tus datos se han envíado",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleBack = () => {
    navigate("/" + routes[step - 1].path);
  };

  return (
    <div className="stepper">
      <div className="stepper-buttons">
        <Button
          variant="contained"
          className="buttonCustom"
          disabled={step === 0}
          onClick={handleBack}
        >
          Atras
        </Button>
        {routeActual.optional && (
          <Button color="inherit" onClick={handleNext} className="buttonSkip">
            Saltar
          </Button>
        )}
        <Button
          variant="contained"
          onClick={handleNext}
          className="buttonCustom"
          disabled={validate}
        >
          {step === routes.length - 1 ? "Enviar" : "Siguiente"}
        </Button>
      </div>
      <Stepper activeStep={step} alternativeLabel>
        {routes.map((route) => (
          <Step key={route.order}>
            <StepLabel>{route.name}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
