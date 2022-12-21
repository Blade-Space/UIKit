import React from 'react';

export interface Props {
    children: JSX.Element 
}

const NavigateLayout: React.FC<Props> = ({children}) => {
    return (
        <div>
           {children} 
        </div>
    );
};

export default NavigateLayout;