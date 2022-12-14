import React from 'react';
import ExtraModalItem, {IExtraModalItemProps} from './ExtraModalItem';
import styles from './index.module.css';

import Text from '../../Text';
import SmallDescriptonLink from './SmallDescriptonLink';

export type IExtraModalItemOrLine = {
    type: "item" | "line"
    options?: IExtraModalItemProps
}

export interface IExtraModalProps {
    width?: number
    className?: string
    children?: React.ReactNode
    items?: IExtraModalItemOrLine[]
    description?: {
        text: string
        link: string
    } 
}

const ExtraModal: React.FC<IExtraModalProps> = (
    {children, items, description, className, width}
    ) => {
    return (
        <div className={`${styles.modal} ${className}`} style={{width}}>
            {children && children}
            {items && items.map((item, index) => 
                item.type === "line" ? 
                    <div key={index} className={styles.description__line} /> 
                    : 
                    item.type === "item" &&
                    <ExtraModalItem
                        key={index}
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

export default ExtraModal;