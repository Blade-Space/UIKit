import React from 'react';
import styles from './index.module.css';

import Text from '../../../Text';
import { useGetIcon } from '../../../../hooks/getIconHook';
import {useFormatBytes} from '../../../../hooks/formatBytes';

export interface FileListItemProps {
    name: string;
    date: string;
    type: string;
    size: number;
    backgroundColor?: boolean;
    onOpen?: React.MouseEventHandler<HTMLParagraphElement>
}

const FileListItem = ({name, date, type, size, onOpen=undefined, backgroundColor=false}: FileListItemProps) => {

    const formatedSize = useFormatBytes(size, 2) 

    const icon = useGetIcon(name.includes(".") ? name.split(".")[1] : "folder")

    return (
        <div 
            className={styles.container}
            style={{backgroundColor: backgroundColor ? "#171717" : "#1E1E1E"}}
        >
            <div className={styles.file__name}>
                <img className={styles.file__icon} src={icon} alt={name} />
                <Text onClick={onOpen}>{name}</Text>
            </div>
            <div className={styles.file__data}><Text color="gray">{date}</Text></div>
            <div className={styles.file__type}><Text color="gray">{type}</Text></div>
            <div className={styles.file__size}><Text color="gray">{formatedSize}</Text></div>
        </div>
    );
};

export default FileListItem;