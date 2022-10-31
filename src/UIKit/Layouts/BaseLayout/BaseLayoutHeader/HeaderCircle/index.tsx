import React from 'react';
import styles from './index.module.css';

export interface HeaderCircleProps {
    color: "red" | "green" | "white" // E996B0, 9FB8AB, DDE1E2
    onClick: React.MouseEventHandler<HTMLParagraphElement>
}

const HeaderCircle = ({color, onClick}: HeaderCircleProps) => {

    const colorToHexConverter = (color: HeaderCircleProps["color"]) => {
        switch (color) {
            case "red": return "#E996B0"
            case "green": return "#9FB8AB"
            case "white": return "#DDE1E2" 
            default: return "#E996B0"}}

    return (
        <div 
            onClick={onClick}
            style={{ backgroundColor: colorToHexConverter(color) }}
            className={styles.Circle} 
        />
    );
};

export default HeaderCircle;