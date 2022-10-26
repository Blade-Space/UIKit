import React from "react"


type EventTargetValue = React.ChangeEvent<HTMLInputElement>
//FIXME: Надо разобраться с типизацией. параметра отвечающего за изменение value
export type InputDispatchSetState = ((arg0: string) => void)