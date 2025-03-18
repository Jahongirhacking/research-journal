import { Input, InputProps } from "antd";
import { ChangeEvent, useState } from "react";

interface IMask extends InputProps {
    format: string[];
    maskChar: string[];
    setValue: (value: string) => void;
}

const InputMask = ({ format, maskChar, setValue, ...props }: IMask) => {
    const IMPORTANT_CHAR = '!';
    const DIGIT_CHAR = '9';
    const ALPHA_CHAR = 'A';

    const [internalValue, setInternalValue] = useState('');

    const encode = (data: string) => {
        let value = '';
        let rawIndex = 0; // Tracks raw user input ignoring format characters
        for (let i = 0; i < format.length; i++) {
            if (rawIndex >= data.length) break;
            if (maskChar.includes(format[i])) {
                value += format[i];
            } else {
                value += data[rawIndex];
                rawIndex++;
            }
        }
        return value;
    }

    const decode = (value: string) => {
        return value.split('').filter(char => !maskChar.includes(char)).join('');
    }

    const match = (format: IMask['format'], value: string) => {
        if (format.length < value.length) return false;
        for (let i = 0; i < format.length; i++) {
            if (format[i][0] !== IMPORTANT_CHAR && value.length <= i) break;
            if (
                (format[i][0] === IMPORTANT_CHAR && format[i][1] !== value[i]) ||
                (format[i] === DIGIT_CHAR && isNaN(Number(value[i]))) ||
                (format[i] === ALPHA_CHAR && !isNaN(Number(value[i])))
            ) {
                return false;
            }
        }
        return true;
    };

    const makeInitialize = () => {
        if (!internalValue) {
            const initialValue = format.map((curr) => (curr[0] === IMPORTANT_CHAR ? curr[1] : '')).join('');
            setValue(initialValue);
            setInternalValue(initialValue);
        }
    }

    const handleInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        // If new value does not match the expected format, keep the previous value
        if (!match(format, value)) {
            return;
        }
        setValue(decode(value));
        setInternalValue(decode(value));
    };

    return <Input {...props} value={encode(internalValue)} onChange={handleInputChange} onFocus={makeInitialize} />;
};

export default InputMask;