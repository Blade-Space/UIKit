import React from 'react';
import styles from './index.module.css';

import {useGetIcon} from '../../hooks/getIconHook';
import Text from '../Text';

export interface PathProps {
    path: string;
    type: "folder" | "file"
    className?: string;
}

const Path = ({path, type, className}: PathProps) => {

    let fileIcon: string = "";
    if (type === "file") {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        fileIcon = useGetIcon(path.split("/")[path.split("/").length-1].split(".")[1])
    }
    const folderIcon = useGetIcon("folder")

    // const [files, setFiles] = React.useState<{name: string, icon: string}[]>([]);

    // console.log(path.split("/"));
    
    // for (let item in path.split("/")) {
    //     if (item.includes(".")) {
    //         // setFiles([...files, {name: item, icon: fileIcon}])
    //         files = [...files, {name: item, icon: fileIcon}]
    //     } else {
    //         console.log(1);
    //         setFiles([...files, {name: item, icon: folderIcon}])
    //     }
    // }
    // }
    
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