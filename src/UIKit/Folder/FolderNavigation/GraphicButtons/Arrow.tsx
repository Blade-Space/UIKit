import React from 'react';

export interface IArrowProps {
    orientation: "left" | "right" 
    onClick?: React.MouseEventHandler<SVGSVGElement>
}

const Arrow = ({orientation, onClick=undefined}: IArrowProps) => {
    return (
            <svg
                onClick={onClick}
                style={{ 
                    transform: `rotate(${orientation === "left" ? "0" : "180deg"})`,
                    cursor: onClick ? "pointer" : "not-allowed",
                    marginRight: `${orientation === "left" ? "15px" : "0"}`
                }}
                width="11" 
                height="17" 
                viewBox="0 0 11 17" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <path 
                    d="M10.0288 0.745203C9.60175 0.338188 8.88994 0.338188 8.46285 0.745203L0.979933 
                    7.87646C0.897449 7.9549 0.832009 8.04808 0.787359 8.15066C0.742709 8.25324 0.719727 
                    8.36321 0.719727 8.47426C0.719727 8.58532 0.742709 8.69528 0.787359 8.79786C0.832009 
                    8.90044 0.897449 8.99362 0.979933 9.07206L8.46285 16.2033C8.89884 16.6188 9.60175 
                    16.6188 10.0377 16.2033C10.4737 15.7878 10.4737 15.1179 10.0377 14.7024L3.49797 
                    8.4785L10.0377 2.24607C10.4648 1.83058 10.4648 1.1607 10.0288 0.745203Z" 
                    fill="#D4D4D4"/>
            </svg>
    );
};

export default Arrow;