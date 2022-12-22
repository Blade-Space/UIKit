import React, { MouseEventHandler } from 'react';
import styles from './index.module.css';
import Text from '../../Text';

export declare interface Props {
    children: JSX.Element | string
    success?: boolean
    typical?: boolean
    onClick: MouseEventHandler<HTMLParagraphElement>
  }

const DefaultButton: React.FC<Props> = ({children, onClick, typical=false, success=true}) => {
    return (
        <button 
            className={styles.button}
            style={{
                border: typical ? `2px solid ${success ? '#9FB8AB' : '#E996B0'}` : '2px solid #4B4B4B'
            }} 
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

export default DefaultButton;