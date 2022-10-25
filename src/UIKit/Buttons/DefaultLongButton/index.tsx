import React, { MouseEventHandler } from 'react';
import styles from './index.module.css';
import Text from '../../Text';

export interface Props {
    children: JSX.Element | string
    success: boolean
    onClick: MouseEventHandler<HTMLParagraphElement>
}

const DefaultLongButton = ({children, onClick, success=true}: Props) => {
    return (
        <button 
            className={`
                ${styles.button} ${success ? styles.button_blue : styles.button_dark}
            `} 
            >
                <Text 
                    size='medium 15px'
                    bold={false} 
                    italic={false} 
                    pointer={false} 
                    color={'white'} 
                    onClick={onClick}
                    >
                        {children}
                </Text> 
        </button>
    );
};

export default DefaultLongButton;