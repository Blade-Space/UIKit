import React from 'react';
import styles from './index.module.css';

export interface Props {
    children: JSX.Element 
}

const ExtraModalLayaout = ({children}: Props) => {
    return (
        <div>
           {children} 
           h1 title
        </div>
    );
};

export default ExtraModalLayaout;