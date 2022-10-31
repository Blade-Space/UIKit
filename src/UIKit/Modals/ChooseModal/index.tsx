import React, { MouseEventHandler } from 'react';
import DefaultLongButton from '../../Buttons/DefaultLongButton';
import SystemIcon from '../../SystemIcon';
import Text from '../../Text';
import styles from './index.module.css';

export interface Props {
    icon: string;
    message: string;
    onSuccess: {
        handler: MouseEventHandler<HTMLParagraphElement>
        text: string;
    }
    onInterrupt: {
        handler: MouseEventHandler<HTMLParagraphElement>
        text: string;
    }
}

const ChooseModal = ({
    icon="\\assets\\systemIcons\\runfile.svg",
    message,
    onSuccess,
    onInterrupt
}: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.container__icon}>
                <SystemIcon icon={icon}/>
                <Text>{message}</Text>
            </div>
            <div className={styles.container__buttons}>
                <DefaultLongButton 
                    onClick={onSuccess.handler} 
                    success={true} 
                    width="260px"
                    >
                        {onSuccess.text}
                </DefaultLongButton>
                <div className={styles.container__mrg}/>
                <DefaultLongButton 
                    onClick={onInterrupt.handler} 
                    success={false} 
                    width="260px"
                    >
                        {onInterrupt.text}
                </DefaultLongButton>
            </div>
        </div>
    );
};

export default ChooseModal;