import React, { MouseEventHandler } from 'react';
import styles from './index.module.css';

export interface ITextProps {
    children: React.ReactNode
    size?: 'tiny 13px' | 'small 14px' | 'medium 15px' | 'default 16px' | 'large 24px'
    bold?: boolean
    italic?: boolean
    color?: 'white' | 'blue' | 'gray' | 'dark gray'
    onClick?: MouseEventHandler<HTMLParagraphElement>,
}

const Text: React.FC<ITextProps> = (
        {
            children, 
            size="default 16px", 
            bold=false,
            italic=false,
            color="white",
            onClick=undefined,
        }) => {

    const colorConvertToHex = (color: ITextProps["color"]) => {
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
        <p className={styles.text} 
            style={
                {
                    fontSize: size.split(' ')[1],
                    fontWeight: bold ? 'bold' : 'normal',
                    fontStyle: italic ? 'italic' : 'normal',
                    color: colorConvertToHex(color),
                    cursor: onClick ? 'pointer' : 'select',
                }
            }
            onClick={onClick}
        >
            {children} 
        </p>
    );
};

export default Text;