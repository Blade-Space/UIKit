import React from 'react';
import styles from './index.module.css';

export interface IDropdownIconProps {
    isActive: boolean
}

const DropdownIcon: React.FC<IDropdownIconProps> = ({isActive}) => {

    return (
        <svg 
            className={isActive ? styles.active : styles.disable} 
            width="13" 
            height="10" 
            viewBox="0 0 13 10" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M0 0L6.5 10L13 0L6.5 3.75L0 0Z" fill="#FAFAFA"/>
        </svg>
            
    );
};

export default DropdownIcon;