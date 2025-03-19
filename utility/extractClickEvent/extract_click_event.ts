type Events={type:"click",event:MouseEvent}|{type:"focus",event:FocusEvent}|{type:"keydown",event:KeyboardEvent}
 
// it should be {type:"click",event:MouseEvent} from Events type. Do not hard-code it. use some utility type to extract click event type.
type ClickEvent= Extract<Events, {type: "click"}>