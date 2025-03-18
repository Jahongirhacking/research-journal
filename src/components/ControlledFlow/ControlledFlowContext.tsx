import { createContext } from "react";
import { IControlledFlowProps } from "./ControlledFlow";


export interface IControlledFlowContext extends Omit<IControlledFlowProps, "children" | "setData"> {
    setNextIndex: (step: number) => void;
    pushData: (data: object) => void;
}


const ControlledFlowContext = createContext<Partial<IControlledFlowContext>>({});

export default ControlledFlowContext;