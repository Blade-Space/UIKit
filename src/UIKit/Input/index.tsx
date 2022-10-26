import React, {InputHTMLAttributes} from 'react';
import { InputDispatchSetState } from '../../types/hooksTypes';
import styles from './index.module.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string
    id: string
    value: string | number
    setValue: InputDispatchSetState
    isSuccess: "none" | "success" | "warning"
    
}

const Input = ({placeholder="Inactive", value, setValue, isSuccess}: InputProps) => {

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

    return (
        <input
            placeholder={placeholder}
            className={isSuccess == "none" ? styles.input : isSuccess == "success" ? styles.inputSuccess : styles.inputWarning}
            value={value}
            onChange={onChangeHandler}
        /> 
            
        
    );
};

export default Input;