import React, { Dispatch, FC, ReactElement, SetStateAction } from 'react';
import ControlledFlowContext, { IControlledFlowContext } from './ControlledFlowContext';

export interface IControlledFlowProps {
    data: object;
    setData: Dispatch<SetStateAction<object>>;
    current: number;
    setCurrent: Dispatch<SetStateAction<number>>;
    children: ReactElement[] | ReactElement;
}

const ControlledFlow: FC<IControlledFlowProps> = ({ data, setData, current, setCurrent, children }) => {
    const pushData: IControlledFlowContext['pushData'] = (data: object) => {
        setData(prev => ({ ...prev, ...data }));
    }

    const setNextIndex: IControlledFlowContext['setNextIndex'] = (step: number) => {
        setCurrent(prev => Math.max(0, Math.min(prev + step, React.Children.count(children) - 1)));
    }

    return (
        <ControlledFlowContext.Provider value={{
            data,
            pushData,
            setNextIndex,
            current,
            setCurrent,
        }}>
            {
                React.Children.map(children, (el, index) => (
                    index === current ? React.cloneElement(el, {}) : null
                ))
            }
        </ControlledFlowContext.Provider>
    )
}

export default ControlledFlow