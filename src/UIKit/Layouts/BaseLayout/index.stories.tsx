import * as React from "react";
import { Meta, Story } from "@storybook/react";
import BaseLayout from "./index";
import {IBaseLayoutProps} from './index'; 

import Text from '../../Text';

export default {
  component: BaseLayout,
} as Meta;

const styleForDiv = {
  width: "100%", 
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

export const Default: Story<IBaseLayoutProps> = (args) => {
  const [zBiggest, _setZBiggest] = React.useState(1);
  
  const setZBiggest = (n: number) => {
    _setZBiggest(n)
  }
return ( 
    <BaseLayout {...args} scaling={true} biggestValueOfTheLayer={{value:zBiggest, setValue: setZBiggest}} />
  )
};
Default.args = {
  onClose: () => {alert("close")},
  size: {width: "700px", height: "300px"},
  title: "Default Layout",
  children: <div style={styleForDiv}><Text size="large 24px">Default Window⚙️</Text></div>,
  draggable: true,
  openPosition: {x: 50, y: 0},
  onHide: () => {alert("onHide")}
};


interface BaseLayoutPropsForThreeWindows {
  first: IBaseLayoutProps
  second: IBaseLayoutProps
  three: IBaseLayoutProps
}

export const ThreeWindows: Story<BaseLayoutPropsForThreeWindows> = (args) => {
  const [zBiggest, _setZBiggest] = React.useState(1);
  
  const setZBiggest = (n: number) => {
    console.log(n);
    _setZBiggest(n)
  }
return ( 
  <div>
    <BaseLayout 
      scaling
      biggestValueOfTheLayer={{ value: zBiggest, setValue: setZBiggest }} 
      title={"window1"}  
      onHide={() => {alert("onHide")}} 
      onClose={() => {alert("onClose")}} 
      size={{
        width: "700px",
        height: "500px"
      }} 
      openPosition={{
        x: 0,
        y: 0
      }}>
        <div style={styleForDiv}><Text size="large 24px">Window 1🥱</Text></div>
    </BaseLayout>
    <BaseLayout 
      scaling
      biggestValueOfTheLayer={{ value: zBiggest, setValue: setZBiggest }} 
      title={"window2"}  
      onHide={() => {alert("onHide")}} 
      onClose={() => {alert("onClose")}} 
      size={{
        width: "400px",
        height: "200px"
      }} 
      openPosition={{
        x: 200,
        y: 100
      }}>
        <div style={styleForDiv}><Text size="large 24px">Window 2🔥</Text></div>
    </BaseLayout>
    <BaseLayout 
      scaling
      biggestValueOfTheLayer={{ value: zBiggest, setValue: setZBiggest }} 
      title={"window3"}  
      onHide={() => {alert("onHide")}} 
      onClose={() => {alert("onClose")}} 
      size={{
        width: "500px",
        height: "100px"
      }} 
      openPosition={{
        x: 300,
        y: 300
      }}>
        <div style={styleForDiv}><Text size="large 24px">Window 3🤍</Text></div>
    </BaseLayout>
  </div>
  )
};
ThreeWindows.args = {};

export const WithOutScale: Story<IBaseLayoutProps> = (args) => {
  const [zBiggest, _setZBiggest] = React.useState(1);
  
  const setZBiggest = (n: number) => {
    _setZBiggest(n)
  }
return ( 
    <BaseLayout {...args} biggestValueOfTheLayer={{value:zBiggest, setValue: setZBiggest}} />
  )
};
WithOutScale.args = {
  onClose: () => {alert("close")},
  size: {width: "700px", height: "300px"},
  title: "Default Layout",
  children: <div style={styleForDiv}><Text size="large 24px">Default Window⚙️</Text></div>,
  draggable: true,
  openPosition: {x: 50, y: 0},
  onHide: () => {alert("onHide")}
};

export const WithOutButtons: Story<IBaseLayoutProps> = (args) => {
  const [zBiggest, _setZBiggest] = React.useState(1);
  
  const setZBiggest = (n: number) => {
    _setZBiggest(n)
  }
return ( 
    <BaseLayout {...args} biggestValueOfTheLayer={{value:zBiggest, setValue: setZBiggest}} />
  )
};
WithOutButtons.args = {
  onClose: undefined,
  onHide: undefined,
  size: {width: "700px", height: "300px"},
  title: "Default Layout",
  children: <div style={styleForDiv}><Text size="large 24px">Default Window⚙️</Text></div>,
  draggable: true,
  openPosition: {x: 50, y: 0}
};

export const NotDraggable: Story<IBaseLayoutProps> = (args) => {
  const [zBiggest, _setZBiggest] = React.useState(1);
  
  const setZBiggest = (n: number) => {
    _setZBiggest(n)
  }
return ( 
    <BaseLayout {...args} scaling biggestValueOfTheLayer={{value:zBiggest, setValue: setZBiggest}} />
  )
};
NotDraggable.args = {
  onClose: () => {alert("close")},
  size: {width: "700px", height: "300px"},
  title: "Default Layout",
  children: <div style={styleForDiv}><Text size="large 24px">Default Window⚙️</Text></div>,
  draggable: false,
  openPosition: {x: 50, y: 0},
  onHide: () => {alert("onHide")}
};