import React from 'react';

export interface TableViewProps {
    active: boolean;
    onClick?: React.MouseEventHandler<SVGSVGElement>
}

const TableView = ({onClick=undefined, active}: TableViewProps) => {
    return (
        <svg 
            onClick={onClick}
            style={{cursor: 'pointer'}}
            width="18" 
            height="18" 
            viewBox="0 0 18 18" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <rect 
                width="7.82609" 
                height="7.82609" 
                rx="1.56522" 
                fill={active ? "#B8B8B8" : "#383838"}/>
            <rect 
                x="10.1738" 
                width="7.82609" 
                height="7.82609" 
                rx="1.56522" 
                fill={active ? "#B8B8B8" : "#383838"}/>
            <rect 
                x="10.1738" 
                y="10.174" 
                width="7.82609" 
                height="7.82609" 
                rx="1.56522" 
                fill={active ? "#B8B8B8" : "#383838"}/>
            <rect 
                y="10.174" 
                width="7.82609" 
                height="7.82609" 
                rx="1.56522" 
                fill={active ? "#B8B8B8" : "#383838"}/>
        </svg>
        );
};

export default TableView;