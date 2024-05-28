import React from "react";

function MyComponent(props)
{
    return(
        <div>
            {props.value}
           { console.log("mycomponent")}
        </div>
    )
}

export default React.memo(MyComponent);