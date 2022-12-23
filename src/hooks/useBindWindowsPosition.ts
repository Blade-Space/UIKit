import { useDrag } from "react-use-gesture";
import {IBaseLayoutProps} from '../UIKit/Layouts/BaseLayout';
import { useState } from "react";
import { SpringRef } from "react-spring";

interface IUseBindWindowsPosition {
    biggestValueOfTheLayer: IBaseLayoutProps["biggestValueOfTheLayer"];
    openPosition: IBaseLayoutProps["openPosition"];
    api: SpringRef<{x: number; y: number;}>;
    windowSize: {innerWidth: number; innerHeight: number;};
    draggable: IBaseLayoutProps["draggable"];
    isDragAllow: boolean | undefined;
    size: IBaseLayoutProps["size"]
}

export function useBindWindowsPosition({ 
    biggestValueOfTheLayer, 
    openPosition, 
    api, 
    windowSize, 
    draggable, 
    isDragAllow,
    size
} : IUseBindWindowsPosition
    ) {
    const [zIndex, setZIndex] = useState(biggestValueOfTheLayer.value);
    const [cordinates, setCordinates] = useState({x: openPosition!.x , y: openPosition!.y})                  
    const bindWindowsPosition = useDrag(                                                              
        (params) => {   
            if (zIndex <= biggestValueOfTheLayer.value) {
                setZIndex(biggestValueOfTheLayer.value + 2)
                biggestValueOfTheLayer.setValue(biggestValueOfTheLayer.value + 1)              
            }
            setCordinates({
                x: openPosition!.x + params.offset[0],
                y: openPosition!.y + params.offset[1]
            })  
            api.start({
                x: openPosition!.x + params.offset[0],
                y: openPosition!.y + params.offset[1],
                immediate: true,  
            })
    },
    {bounds: { 
        left: -openPosition!.x, 
        right: windowSize.innerWidth - openPosition!.x - parseInt(size!.width.split("px")[0]) - 2, 
        top: -openPosition!.y, 
        bottom: windowSize.innerHeight - openPosition!.y - parseInt(size!.height.split("px")[0]) - 36
    },
        enabled: draggable === false ? false : isDragAllow
    });
    return {zIndex, cordinates, bindWindowsPosition}
} 