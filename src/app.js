import React from "react";
import ReactDOM  from "react-dom/client";
import Navbar from "./components/NavBar";

const AppLayout=()=>{
    return(
        <div>
         <Navbar/>
        </div>
    )
}

const app=ReactDOM.createRoot(document.getElementById("root"));
app.render(<AppLayout/>)