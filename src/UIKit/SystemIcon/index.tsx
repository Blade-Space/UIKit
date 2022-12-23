import React, {useState} from 'react';
import styles from './index.module.css';

export interface ISystemIconProps {
    icon: string
    className?: string
}

const SystemIcon: React.FC<ISystemIconProps> = ({icon, className}) => {

    const [isHover, serIsHover] = useState(false);

    return (
        <div 
            onMouseEnter={() => serIsHover(prev=>true)} 
            onMouseLeave={() => serIsHover(prev=>false)}
            className={className}>
            <img 
                className={!isHover ? styles.icon : styles.iconHover}
                src={icon} alt="" />
        </div>
    );
};

export default SystemIcon;