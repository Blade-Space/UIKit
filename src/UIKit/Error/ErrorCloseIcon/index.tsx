import React, { MouseEventHandler } from 'react';

interface Props {
    onClick: MouseEventHandler<HTMLDivElement>
    style: {};
}

const ErrorCloseIcon = ({onClick, ...props}: Props) => {
    return (
        <div onClick={onClick} {...props}>
            <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                    d="M11.7252 14.3883L7.19718 18.8136L4.63756 16.1945L9.1656 11.7693L4.92232 7.42746L7.262 5.14087L11.5053 9.48266L16.01 5.08012L18.5697 7.69916L14.0649 12.1017L18.3082 16.4435L15.9685 18.7301L11.7252 14.3883Z" 
                    fill="white"/>
            </svg>
        </div>
    );
};

export default ErrorCloseIcon;