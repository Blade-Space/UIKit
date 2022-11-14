import React, { MouseEventHandler } from 'react';
import styles from './index.module.css';

import Text from '../../../Text';

export interface ExtraModalItemProps {
    children: React.ReactNode
    onClick: MouseEventHandler<HTMLParagraphElement>
    className?: string
    Icon?: {
        type: "img" | "svg"
        url: string
    }
}

const ExtraModalItem = ({children="element", className=styles.li, onClick, Icon}: ExtraModalItemProps) => {
    return (
        <li 
            className={className} 
            style={{
                listStyleType: "none"
            }}
        >   
        {Icon ? 
            <div className={styles.li_container}>
                <img src={Icon.url}  />
                <Text onClick={onClick}>{children}</Text>
            </div>

            :

            <Text onClick={onClick}>{children}</Text>}
        </li>
    );
};

export default ExtraModalItem;