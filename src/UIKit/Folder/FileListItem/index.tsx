import React from 'react';
import styles from './index.module.css';

import Text from '../../Text';
import { useGetIcon } from '../../../hooks/useGetIcon';
import {useFormatBytes} from '../../../hooks/useFormatBytes';

export interface IFileListItemProps {
    name: string;
    date: string;
    type: string;
    size: number;
    backgroundColor?: boolean;
    onOpen?: React.MouseEventHandler<HTMLParagraphElement>
}

const FileListItem = (
    {name, date, type, size, onOpen=undefined, backgroundColor=false}: IFileListItemProps
    ) => {

    const formatedSize = useFormatBytes(size, 2) 
    const {icon_getter} = useGetIcon()
    
    const icon = icon_getter(name.includes(".") ? name.split(".")[1] : "folder") 

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