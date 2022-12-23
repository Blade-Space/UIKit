import React, {InputHTMLAttributes} from 'react';
import styles from './index.module.css';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string | number
    setValue: ((arg0: string) => void)
    placeholder?: string
    isSuccess?: "none" | "success" | "warning"
    
}

const Input: React.FC<IInputProps> = ({placeholder="Inactive", value, setValue, isSuccess="none"}) => {

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

    return (
        <input
            placeholder={placeholder}
            className={isSuccess === "none" ? styles.input : isSuccess === "success" ? styles.inputSuccess : styles.inputWarning}
            value={value}
            onChange={onChangeHandler}
        />  
    );
};

export default Input;