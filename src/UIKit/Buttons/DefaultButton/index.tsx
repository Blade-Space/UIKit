import React from 'react';
import styles from './index.module.css';

export interface Props {
    children: JSX.Element | string;
    color: 'one' | 'two' | 'three';
}

const DefaultButton = ({children}: Props) => {
    return (
        <button className={styles.main} >
           {children} 
        </button>
    );
};

export default DefaultButton;