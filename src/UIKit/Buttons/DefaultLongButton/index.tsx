import React, { MouseEventHandler } from 'react';
import styles from './index.module.css';
import Text from '../../Text';

export interface IDefaultLongButtonProps {
    children: JSX.Element | string
    onClick: MouseEventHandler<HTMLParagraphElement>
    success?: boolean
    width?: "260px" | "inline-block"
}

const DefaultLongButton: React.FC<IDefaultLongButtonProps> = (
    {children, onClick, success=true, width="inline-block"}
    ) => {
    return (
        <button 
            style={{
                width: width==="260px" ? width : ""  
            }}
            className={`
                ${styles.button} 
                ${success 
                    ? 
                    styles.button_blue 
                    : 
                    styles.button_dark}
            `} 
            >
                <Text 
                    size='medium 15px'
                    bold={false} 
                    italic={false}
                    color={'white'} 
                    onClick={onClick}
                    >
                        {children}
                </Text> 
        </button>
    );
};

export default DefaultLongButton;