import React from 'react';
import Text from '../../../Text';
import HeaderCircle from './HeaderCircle';
import styles from './index.module.css';



// import { Range } from '../../../../types/rangeType';

export interface BaseLayoutHeaderProps {
    onClose?: React.MouseEventHandler<HTMLParagraphElement>
    onHide?: React.MouseEventHandler<HTMLParagraphElement>
    onScale?: React.MouseEventHandler<HTMLParagraphElement>
    title: string
    width: string
}

const BaseLayoutHeader = ({
    onClose,
    onHide,
    onScale,
    title,
    width,
}: BaseLayoutHeaderProps) => {
    return (
        <div 
            style={{width: `calc(${width} + 2px)`}}
            className={styles.header}
        >
           <div className={styles.header__buttons}>
                {onClose && <HeaderCircle color="red" onClick={onClose}/>}
                {onHide && <HeaderCircle color="green" onClick={onHide}/>}
                {onScale && <HeaderCircle color="white" onClick={onScale}/>}
           </div>
           <div className={styles.header__title}>
                <Text size="medium 15px">{title}</Text>
           </div>
           <div 
                className={styles.header__nothing}
           />
        </div>
    );
};

export default BaseLayoutHeader;