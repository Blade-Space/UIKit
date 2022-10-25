import React from 'react';
import styles from './index.module.css';
import Text from '../Text';
import ErrorInfoString from './ErrorInfoString';
import ErrorCloseIcon from './ErrorCloseIcon';

export interface Props {
    isFrontError: boolean
    module?: string
    component?: string
    file: string
    string?: number
    children: JSX.Element | string 
    onClose: (event: any) => void
}

const Error = ({module, file, isFrontError=true, component, string, children}: Props) => {
    return (
        <div className={styles.error}>
            <div className={styles.where_is_error}>
                {!isFrontError && 
                    <ErrorInfoString title="Module: ">
                        <>{module!} : {string}</>
                    </ErrorInfoString>
                }
                {isFrontError && 
                    <ErrorInfoString title="Component: ">
                        <>{component!} : {string}</>
                    </ErrorInfoString>
                }
                <ErrorInfoString title="File: ">
                    {file}
                </ErrorInfoString>
            </div>
            <div className={styles.error_text}>
                <Text>{children}</Text>
            </div>
            <div>
                <ErrorCloseIcon onClick={() => {alert("close")}} style={{cursor: "pointer"}} />
            </div>
        </div>
    );
};

export default Error;