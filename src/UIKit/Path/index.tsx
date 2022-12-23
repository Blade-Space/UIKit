import React from 'react';
import styles from './index.module.css';

import {useGetIcon} from '../../hooks/useGetIcon';
import Text from '../Text';

export interface IPathProps {
    path: string;
    type?: "folder" | "file"
    className?: string;
}

const Path: React.FC<IPathProps> = ({path, type="folder", className}) => {

    let fileIcon: string = "";

    const {icon_getter} = useGetIcon();

    if (type === "file") {
        fileIcon = icon_getter(path.split("/")[path.split("/").length-1].split(".")[1])
    }
    const folderIcon = icon_getter("folder")
    
    return (
        <div className={`${styles.path} ${className}`}>
            {path.split("/").map((item, index) =>
            <div key={index} className={styles.item}>
                <img src={item.includes(".") ? fileIcon : folderIcon} className={styles.item__icon} alt={item} />
                <Text size="default 16px">{item}</Text>
                <Text size="default 16px">/</Text>
            </div>
            )}
        </div>
    );
};

export default Path;