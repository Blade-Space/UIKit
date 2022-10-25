import React, { MouseEventHandler } from 'react';
import styles from './index.module.css';

export interface Props {
    children: JSX.Element | string
    size: 'tiny 13px' | 'small 14px' | 'medium 15px' | 'default 16px' | 'large 24px'
    bold: boolean
    italic: boolean
    pointer: boolean
    color: 'white' | 'blue' | 'gray' | 'dark gray'
    onClick: MouseEventHandler<HTMLParagraphElement>
}

const Text = (
        {
            children, 
            size="default 16px", 
            bold=false,
            italic=false,
            pointer=false,
            color="white",
            onClick
        }: Props) => {

    const colorConvertToHex = (color: Props["color"]) => {
        switch (color) {
            case "white":
                return "#FFFFFF";
            case "gray":
                return "#ffffff84";
            case "blue":
                return "#10BAFE";
            case "dark gray":
                return "#464646";
            default:
                return "#E996B0";
        }
    }
            
    return (
        <p 
            className={styles.text} 
            style={
                {
                    fontSize: size.split(' ')[1],
                    fontWeight: bold ? 'bold' : 'normal',
                    fontStyle: italic ? 'italic' : 'normal',
                    color: colorConvertToHex(color),
                    cursor: pointer ? 'pointer' : 'select'
                }
            }
            onClick={onClick}
        >
            {children} 
        </p>
    );
};

export default Text;