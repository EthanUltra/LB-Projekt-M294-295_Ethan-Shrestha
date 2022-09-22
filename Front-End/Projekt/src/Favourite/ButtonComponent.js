import React from "react";

const ButtonComponent = props => {
    // if (props.load) {
    //   return <button>click me</button>; 
    // } else {
    //   return <button>loading</button>;
    // }
    return <button>{props.load ? "click me" : "loading"}</button>;
};


// eslint-disable-next-line react/no-typos
ButtonComponent.defaultprops = {
    warna: "red",
    load: true
};

export default ButtonComponent;