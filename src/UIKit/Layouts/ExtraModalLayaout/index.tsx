import React from 'react';
import ExtraModalItem, {ExtraModalItemProps} from './ExtraModalItem';
import styles from './index.module.css';

import Text from '../../Text';
import SmallDescriptonLink from './SmallDescriptonLink';

type ExtraModalLayaoutItem = {
    type: "item" | "line"
    options?: ExtraModalItemProps
}

export interface ExtraModalLayaoutProps {
    children?: React.ReactNode
    items?: ExtraModalLayaoutItem[]
    description?: {
        text: string
        link: string
    } 
}

const ExtraModalLayaout = ({children, items, description}: ExtraModalLayaoutProps) => {
    return (
        <div className={styles.modal}>
            {children && children}
            {items && items.map((item) => 
                item.type == "line" ? 
                    <div className={styles.description__line} /> 
                    : 
                    item.type == "item" &&
                    <ExtraModalItem
                        className={styles.item}
                        Icon={item.options?.Icon} 
                        onClick={item.options!.onClick}>
                        {item.options!.children}
                    </ExtraModalItem>
                    )}
            {
                description &&
                    <div className={styles.description}>
                        <div className={styles.description__line} /> 
                        <div className={styles.description__content}>
                            <Text size="small 14px" color="gray">{description.text}</Text>
                            <SmallDescriptonLink link={description.link} />
                        </div>
                    </div>
            }
        </div>
    );
};

export default ExtraModalLayaout;