import { ReactDOMAttributes } from '@use-gesture/react/dist/declarations/src/types';
import React from 'react';
import Text from '../../../Text';
import HeaderCircle from './HeaderCircle';
import styles from './index.module.css';

export interface BaseLayoutHeaderProps {
    title: string
    draggable?: boolean
    /**function for closing the window*/
    onClose?: React.MouseEventHandler<HTMLParagraphElement>
    /**function for hiding the window */
    onHide?: React.MouseEventHandler<HTMLParagraphElement>
    /**function for scaling the window */
    onScale?: React.MouseEventHandler<HTMLParagraphElement>
    /**
     * all drag handlers 
     *! FIXME: the value should not be undefined 
     * */
    dragHandlers: (...args: any[]) => ReactDOMAttributes
}

const BaseLayoutHeader: React.FC<BaseLayoutHeaderProps> = (
    {
        title,onClose,onHide,onScale,dragHandlers,draggable=true
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