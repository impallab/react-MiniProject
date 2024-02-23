import React from 'react'
import ReactDOM from 'react-dom/client'

import CustomApp from "./manual"

function Greet() {
    return (
        <p>Most Welcome , have a good day! </p>
    )
}

//rendering Non-functional element directly by understanding the element structurewhich react support for rendering as react parse it into object before rendering.
const nonFunctionElementOne = React.createElement(
    "a",
    {href:"https://github.com/impallab" ,target:"_main"}, 
    "My-Github"
);
const nonFunctionElementTwo =(
    <a href='https://www.linkedin.com/in/impallab/' target='_blank'>LINKEDIN</a>
);
//rendering the nonfunctional  element :
ReactDOM.createRoot(document.getElementById('root')).render(
    nonFunctionElementTwo
)
