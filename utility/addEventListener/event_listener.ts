// Given EventMap type below, create a typesafe function addEventListener who accept 	two argument. 
// first one is type of event and second argument is data associated with given event.
 
type EventMap = {
  click: { x: number; y: number };
  keypress: { key: string };
};
type eventt = keyof EventMap
type data = EventMap[eventt]
function addEventListener<T extends eventt, D extends data>(event:T, data:D){
    console.log(data);
}

// type EventMap = {
//     click: { x: number; y: number };
//     keypress: { key: string };
//   };
  
//   const e:EventMap = {
//       click : {x: 30, y: 10},
//       keypress : {key: "down"}
//   }
  
//   type data = EventMap[keyof typeof e]
//   function addEventListener<T extends EventMap, D extends data>(event:T, data:D){
//       console.log(data);
//   }
//   addEventListener(e,e.click)