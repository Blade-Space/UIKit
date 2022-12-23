import React from 'react';
import styles from './index.module.css';

import Text from '../../../Text';
import Input from '../../../Input';

import Arrow from './GraphicButtons/Arrow';
import Filter from './GraphicButtons/Filter';
import ListView from './GraphicButtons/ListView';
import Search from './GraphicButtons/Search';
import TableView from './GraphicButtons/TableView';

export type InputDispatchSetState = ((arg0: string) => void)

export interface IFolderNavigationProps {
    changeView: React.MouseEventHandler<SVGSVGElement>;
    onFilter: React.MouseEventHandler<SVGSVGElement>;
    search: {
        value: string;
        onChange: InputDispatchSetState;
    };
    folder: string;
    className: string;
    extraModal: React.ReactNode;
    isListView: boolean;
    isChooseFilter: boolean;
    onBack?: React.MouseEventHandler<SVGSVGElement>;
    onForward?: React.MouseEventHandler<SVGSVGElement>;
}


const FolderNavigation: React.FC<IFolderNavigationProps> = ({
    changeView, 
    onBack, 
    onFilter,
    onForward, 
    className, 
    folder, 
    isListView, 
    extraModal,
    isChooseFilter,
    search
}) => {

    const [isSearchActive, setIsSearchActive] = React.useState(false);

    return (
        <div className={`${styles.container} ${className}`}>
            <div className={styles.container__column}>
                <div className={styles.container__arrows}>
                    <Arrow onClick={onBack} orientation='left'/>
                    <Arrow onClick={onForward} orientation='right'/>
                </div>
                <Text size="large 24px" bold>{folder}</Text>
            </div>
            <div 
                style={{ 
                    width: isSearchActive ? "50%" : "30%",
                    justifyContent: !isSearchActive ? "space-between" : "flex-end"
                }}
                className={styles.container__column_buttons}>
                {!isSearchActive && <div
                    style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center"
                    }}>
                    <Filter onClick={onFilter} />
                    {isChooseFilter && extraModal}
                </div>}
                {!isSearchActive && <div className={styles.container__change_view}>
                    <ListView onClick={changeView} active={isListView} />
                    <TableView onClick={changeView} active={!isListView} />
                </div>}
                {isSearchActive && 
                    <div style={{display: "inline-block", marginRight: "20px"}}>
                        <Input 
                            placeholder={'search by name...'} 
                            value={search.value} 
                            setValue={search.onChange} 
                            isSuccess={'none'} />
                    </div>
                    }
                <Search onClick={() => {setIsSearchActive(prev=>!prev); search.onChange("")}} />
            </div>
        </div>
    );
};

export default FolderNavigation;