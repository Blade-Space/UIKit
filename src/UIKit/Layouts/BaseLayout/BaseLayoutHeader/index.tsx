import { ReactDOMAttributes } from '@use-gesture/react/dist/declarations/src/types';
import React from 'react';
import Text from '../../../Text';
import HeaderCircle from './HeaderCircle';
import styles from './index.module.css';

export interface IBaseLayoutHeaderProps {
    title: string
    dragHandlers: (...args: any[]) => ReactDOMAttributes
    onClose?: React.MouseEventHandler<HTMLParagraphElement>
    onHide?: React.MouseEventHandler<HTMLParagraphElement>
    onScale?: React.MouseEventHandler<HTMLParagraphElement>
}

const BaseLayoutHeader: React.FC<IBaseLayoutHeaderProps> = (
    {
        title, onClose, onHide, onScale, dragHandlers
    }) => {
    return (
        <div {...dragHandlers()} style={{width: `100%`}} className={styles.header}>
            <div className={styles.header__buttons}>
                {onClose && <HeaderCircle color="red" onClick={onClose}/>}
                {onHide && <HeaderCircle color="green" onClick={onHide}/>}
                {onScale && <HeaderCircle color="white" onClick={onScale}/>}
            </div>
            <div className={styles.header__title}>
                <Text size="medium 15px">{title}</Text>
            </div>
            <div  className={styles.header__nothing} />
        </div>
    );
};

export default BaseLayoutHeader;