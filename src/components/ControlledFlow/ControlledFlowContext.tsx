import { createContext } from "react";
import { IControlledFlowContext } from "./ControlledFlow";

const ControlledFlowContext = createContext<Partial<IControlledFlowContext>>({});

export default ControlledFlowContext;