import React from 'react';
import styles from './index.module.css';

import { useDrag } from '@use-gesture/react';
import { useSpring, animated  } from '@react-spring/web'

import BaseLayoutHeader from './BaseLayoutHeader';

export interface BaseLayoutProps {
    /**Window title */
    title: string;
    /** content rendering in layout */
    children: React.ReactNode;
    /**func for closing the window*/
    onClose?: () => void;
    /**func for hide the window*/
    onHide?: () => void;
    /** */
    /**Permission to scale */
    Scaling?: boolean;
    /**Permission to draggable */
    draggable?: boolean;
    /**default window sizes */
    size: {
        width: string;
        height: string;
    };
    /** the initial position of the open window */
    openPosition: {
        x: number; 
        y: number;
    };
    /**the highest value of the layer at the moment and the function for changing it */
    BiggestValueOfTheLayer: {
        value: number;
        setValue: (value: number) => void;
    }
}

const BaseLayout = (
    {
        children, 
        onClose=undefined, 
        onHide=undefined,
        size: {width="420px", height="310px"}, 
        title,
        Scaling=false,
        draggable,
        openPosition,
        BiggestValueOfTheLayer
    }: BaseLayoutProps) => {

        const [{x, y}, api] = useSpring(() => ({ x: openPosition.x, y: openPosition.y }))

        const [windowSize, setWindowSize] = React.useState(getWindowSize());                        // user window inner size {innerWidth, innerHeight} = window
        const [ownSize, setOwnSize] = React.useState({width, height})                               // layout own size
        const [cordinates, setCordinates] = React.useState({x: openPosition.x , y: openPosition.y}) // save the coordinates, to return to the places after the cancellation of scaling
        const [isScaling, setIsScaling] = React.useState(false);                                    // is the window Scaling
        const [isDragAllow, setIsDragAllow] = React.useState(draggable);                            // is it allowed to move the layout on the screen
        const [zIndex, setZIndex] = React.useState(BiggestValueOfTheLayer.value);                   // layout layer
        
        /** **Function for moving around the screen** */
        const bindWindowPos = useDrag(                                                              
            (params) => {   
                if (zIndex <= BiggestValueOfTheLayer.value) {
                    setZIndex(BiggestValueOfTheLayer.value + 2)
                    BiggestValueOfTheLayer.setValue(BiggestValueOfTheLayer.value + 1)              
                }
                setCordinates({
                    x: openPosition.x + params.offset[0],
                    y: openPosition.y + params.offset[1]
                })  
                api.start({
                    x: openPosition.x + params.offset[0],
                    y: openPosition.y + params.offset[1],
                    immediate: true,  
                })
        },
        {bounds: { 
            left: -openPosition.x, 
            right: windowSize.innerWidth - openPosition.x - parseInt(width.split("px")[0]) - 2, 
            top: -openPosition.y, 
            bottom: windowSize.innerHeight - openPosition.y - parseInt(height.split("px")[0]) - 36
        },
        enabled: draggable === false ? false : isDragAllow
    });

        /** **Сhanging the scale state** */
        const ScalingHandler = () => {
            setIsScaling((prev)=>!prev)
        }

        React.useEffect(() => {
            switch (isScaling) {
                case true:
                    api.start({x: 0, y: 0, config:{duration: 200}})
                    setOwnSize({width: "99vw", height: "90vh"})
                    setIsDragAllow(false)
                    break;
                case false:
                    api.start({x: cordinates.x,  y: cordinates.y, config:{duration: 200}})
                    setOwnSize({width, height})
                    setIsDragAllow(true)
                    break;
                default:
                    break;
            }
        }, [height, width, api, cordinates.x, cordinates.y, isScaling]) 
        
        React.useEffect(() => {
            function handleWindowResize() {
              setWindowSize(getWindowSize());
            }
        
            window.addEventListener('resize', handleWindowResize);
        
            return () => {
              window.removeEventListener('resize', handleWindowResize);
            };
          }, []);

    return (

        <animated.div 
            className={styles.container} 
            style={{
                position: 'absolute',
                left: x,
                top: y,
                zIndex: zIndex
        }}>
            <BaseLayoutHeader 
                dragHandlers={bindWindowPos}
                title={title} 
                onClose={onClose} 
                onHide={onHide}
                onScale={Scaling ? ScalingHandler : undefined}
                />
            <div style={{height: ownSize.height, width: ownSize.width}} className={styles.content}>
                {children} 
            </div>
        </animated.div>

    );
};

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

export default BaseLayout;