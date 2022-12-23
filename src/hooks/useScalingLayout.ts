import { IBaseLayoutProps } from '../UIKit/Layouts/BaseLayout';
import { useEffect, Dispatch } from "react";
import { SpringRef } from "react-spring";

interface IUseScalingLayout {
    isScaling: boolean;
    api: SpringRef<{x: number; y: number;}>;
    setOwnSize: Dispatch<React.SetStateAction<{width: string;height: string;}>>;
    setIsDragAllow: Dispatch<React.SetStateAction<boolean | undefined>>;
    cordinates: {x: number;y: number;};
    size: IBaseLayoutProps["size"]
}

export function useScalingLayout(
    {isScaling, api, setOwnSize, setIsDragAllow, cordinates, size}: IUseScalingLayout
    ) {
    useEffect(() => {
        switch (isScaling) {
            case true:
                api.start({x: 0, y: 0, config:{duration: 200}})
                setOwnSize({width: "99vw", height: "90vh"})
                setIsDragAllow(false)
                break;
            case false:
                api.start({x: cordinates.x,  y: cordinates.y, config:{duration: 200}})
                setOwnSize({width: size!.width, height: size!.height})
                setIsDragAllow(true)
                break;
            default:
                break;
        }
    }, [api, cordinates.x, cordinates.y, isScaling, setIsDragAllow, setOwnSize, size]) 
}
