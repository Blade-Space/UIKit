import React from 'react';
import styles from './index.module.css';

import BaseLayoutHeader from './BaseLayoutHeader';

export interface BaseLayoutProps {
    children: React.ReactNode

    onClose?: () => void
    onHide: () => void

    Scaling?: boolean;

    title: string

    size: {
        _width: string
        _height: string
    }
}

const BaseLayout = (
    {

        children, 
        onClose, 
        onHide,
        size: {_width="420px", _height="310px"}, 
        title,
        Scaling=false

    }: BaseLayoutProps) => {

        const [width, setWidth] = React.useState(_width)
        const [height, setHeight] = React.useState(_height)
        const [isScaling, setIsScaling] = React.useState(false);

        React.useEffect(() => {
            switch (isScaling) {
                case true:
                    setWidth("100%")
                    setHeight("100vh")
                    break;
                case false:
                    setWidth(_width)
                    setHeight(_height)
                    break;
            
                default:
                    break;
            }
        }, [_height, _width, isScaling])

        const ScalingHandler = () => {
            setIsScaling((prev)=>!prev)
        }

    return (

        <div>
            <BaseLayoutHeader 
                title={title} 
                width={width}
                onClose={onClose} 
                onHide={onHide}
                onScale={ScalingHandler}
                />
            <div
                style={{height, width}}
                className={styles.container}
            >
                {children} 
            </div>
        </div>

    );
};

export default BaseLayout;