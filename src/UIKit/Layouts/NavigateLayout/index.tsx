import React from 'react';
import styles from './index.module.css';

export interface Props {
    children: JSX.Element 
}

const NavigateLayout = ({children}: Props) => {
    return (
        <div>
           {children} 
        </div>
    );
};

export default NavigateLayout;