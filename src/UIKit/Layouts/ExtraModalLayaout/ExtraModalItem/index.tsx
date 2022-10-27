import React, { MouseEventHandler } from 'react';
import styles from './index.module.css';

import Text from '../../../Text';

export interface ExtraModalItemProps {
    children: React.ReactNode
    onClick: MouseEventHandler<HTMLLIElement>
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
            onClick={onClick}
            style={{
                listStyleType: "none"
            }}
        >   
        {Icon ? 
            <div className={styles.li_container}>
                <img src={Icon.url}  />
                <Text pointer>{children}</Text>
            </div>

            :

            <Text pointer>{children}</Text>}
        </li>
    );
};

export default ExtraModalItem;