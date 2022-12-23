import React, {useState} from 'react';
import styles from './index.module.css';

import Text from '../Text';
import DropdownIcon from './DropdownIcon';
import ExtraModal, {ExtraModalItemOrLine} from '../Modals/ExtraModal';

export interface IDropdownProps {
    defaultValue: string
    items: ExtraModalItemOrLine[]
    onChange: (value: React.ReactNode) => void;
    description?: {
        text: string
        link: string
    },
    width?: number
}

const Dropdown: React.FC<IDropdownProps> = ({defaultValue, items, description, onChange, width=230}) => {

    const [isActive, setIsActive] = useState(false);
    const [_default, set_Default] = useState<React.ReactNode>(defaultValue); 

    const changeHandler = (value: React.ReactNode) => {
        onChange(value);
        set_Default(value);
    }

    // eslint-disable-next-line array-callback-return
    items.map((item) => {
        if (item.type === "item") {
            item.options!.onClick = () => {changeHandler(item.options!.children)}
        }
    })

    return (
        <div className={styles.dropdown} style={{width}}>
            <div onClick={() => setIsActive(prev=>!prev)} className={styles.dropdown__select_item}>
                <Text>{_default}</Text>
                <DropdownIcon isActive={isActive} />
            </div>
            {isActive && 
                <ExtraModal 
                    description={description}
                    width={width}
                    items={items} 
                    className={styles.dropdown__extra_modal} />}
        </div>
    );
};

export default Dropdown;