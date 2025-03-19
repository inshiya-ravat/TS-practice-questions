type Events={type:"click",event:MouseEvent}|{type:"focus",event:FocusEvent}|{type:"keydown",event:KeyboardEvent}
// exclude keydown event from Events type.
type NotKeyDown= Exclude<Events, {type: "keydown"}>