import React from 'react';
import styles from './index.module.css';
import Text from '../../Text';

export interface Props {
    title: string
    children: JSX.Element | string;
}

const ErrorInfoString = ({title, children}: Props) => {
    return (
        <div className={styles.error_info}>
            <Text size='medium 15px' bold={true} color='gray'>
                {title}
            </Text>    
            <span>            	
                <Text size='medium 15px' bold={true}>
                    <p className={styles.none_margins}>
                        {children}
                    </p>
                </Text> 
            </span>
        </div>
    );
};

export default ErrorInfoString;