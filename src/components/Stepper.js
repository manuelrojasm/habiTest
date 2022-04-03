import React from "react";
import { Button, Step, StepLabel, Stepper } from "@material-ui/core";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../contexts/UserContext";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

export default function StepperCustom() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { routes } = useContext(DataContext);

  const routeActual = routes.filter(
    (route) => route.path == pathname.substring(1)
  )[0];

  const step = routeActual.order - 1;

  const [activeStep, setActiveStep] = React.useState(step);

  const handleNext = () => {
    navigate("/" + routes[step + 1].path);
  };

  const handleBack = () => {
    navigate("/" + routes[step - 1].path);
  };

  const handleSkip = () => {
    // if (!isStepOptional(activeStep)) {
    //   // You probably want to guard against something like this,
    //   // it should never occur unless someone's actively trying to break something.
    //   throw new Error("You can't skip a step that isn't optional.");
    // }
    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // setSkipped((prevSkipped) => {
    //   const newSkipped = new Set(prevSkipped.values());
    //   newSkipped.add(activeStep);
    //   return newSkipped;
    // });
  };

  return (
    <div className="stepper">
      <div className="stepper-buttons">
        <Button
          variant="contained"
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          Atras
        </Button>
        {routeActual.optional && (
          <Button color="inherit" onClick={handleSkip}>
            Saltar
          </Button>
        )}
        <Button variant="contained" onClick={handleNext}>
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