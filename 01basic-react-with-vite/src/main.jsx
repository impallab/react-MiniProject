import React from 'react'
import ReactDOM from 'react-dom/client'

import CustomApp from "./manual"

function Greet() {
    return (
        <p>Most Welcome , have a good day! </p>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Greet />
        <CustomApp />
    </>
)
