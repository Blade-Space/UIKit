import React from 'react';
import styles from './index.module.css';

import { useSpring, animated  } from '@react-spring/web'
import {useGetWindowSize} from '../../../hooks/useGetWindowSize';

import BaseLayoutHeader from './BaseLayoutHeader';
import { useBindWindowsPosition } from '../../../hooks/useBindWindowsPosition';
import { useScalingLayout } from '../../../hooks/useScalingLayout';

export interface IBaseLayoutProps {
    /**Window title */
    title: string;
    /** content rendering in layout */
    children: React.ReactNode;
    onClose?: () => void;
    onHide?: () => void;
    /**Permission to scale */
    scaling?: boolean;
    /**Permission to draggable */
    draggable?: boolean;
    /**default window sizes */
    size?: {
        width: string;
        height: string;
    };
    /** the initial position of the open window */
    openPosition?: {
        x: number; 
        y: number;
    };
    /**the highest value of the layer at the moment and the function for changing it */
    biggestValueOfTheLayer: {
        value: number;
        setValue: (value: number) => void;
    }
}

const BaseLayout: React.FC<IBaseLayoutProps> = (
    {
        children, 
        onClose=undefined, 
        onHide=undefined,
        title,
        scaling=false,
        draggable,
        biggestValueOfTheLayer,
        openPosition={x: 0, y: 0},
        size={width: "420px", height: "310px"}, 
    }) => {

        const getWindowSize = useGetWindowSize()

        const [{x, y}, api] = useSpring(() => ({ x: openPosition.x, y: openPosition.y }))
        const {innerWidth, innerHeight} = getWindowSize()
        const [windowSize, setWindowSize] = React.useState({innerWidth, innerHeight});              
        const [ownSize, setOwnSize] = React.useState({width: size.width, height: size.height})                               
        const [isScaling, setIsScaling] = React.useState(false);                                    
        const [isDragAllow, setIsDragAllow] = React.useState(draggable);                            
        
        /** **Function for moving around the screen** */
        const {zIndex, cordinates, bindWindowsPosition} = useBindWindowsPosition({
            biggestValueOfTheLayer, 
            openPosition, 
            api, 
            windowSize, 
            draggable, 
            isDragAllow,
            size
        })

        useScalingLayout({
            cordinates, 
            size,
            api, 
            isScaling, 
            setOwnSize, 
            setIsDragAllow, 
        })

        /** **Сhanging the scale state** */
        const ScalingHandler = () => {
            setIsScaling((prev)=>!prev)
        }
        
        React.useEffect(() => {
            function handleWindowResize() {setWindowSize(getWindowSize())}
            window.addEventListener('resize', handleWindowResize);
            return () => {
                window.removeEventListener('resize', handleWindowResize);
            };
        }, [getWindowSize]);

    return (
        <animated.div 
            className={styles.container} 
            style={{
                position: 'absolute',
                left: x,
                top: y,
                zIndex: zIndex,
        }}>
            <BaseLayoutHeader 
                dragHandlers={bindWindowsPosition}
                title={title} 
                onClose={onClose} 
                onHide={onHide}
                onScale={scaling ? ScalingHandler : undefined}
                />
            <div 
                style={
                    {height: ownSize.height, width: ownSize.width, resize: scaling ? "both" : "none"}
                } 
                className={styles.content}>
                {children} 
            </div>
        </animated.div>

    );
};

export default BaseLayout;