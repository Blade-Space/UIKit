import React, { MouseEventHandler } from 'react';
import styles from './index.module.css';

import Text from '../../../Text';

export interface IExtraModalItemProps {
    children: React.ReactNode
    onClick: MouseEventHandler<HTMLParagraphElement>
    className?: string
    Icon?: {
        type: "img" | "svg"
        url: string
    }
}

const ExtraModalItem: React.FC<IExtraModalItemProps> = (
    {children="element", className=styles.li, onClick, Icon}
    ) => {
    return (
        <li 
            className={className} 
            style={{
                listStyleType: "none"
            }}
        >   
        {Icon ? 
            <div className={styles.li_container}>
                <img src={Icon.url} alt="icon" />
                <Text onClick={onClick}>{children}</Text>
            </div>

            :

            <Text onClick={onClick}>{children}</Text>}
        </li>
    );
};

export default ExtraModalItem;