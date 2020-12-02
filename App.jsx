import React, { useState } from 'react';
import Demo from "./Demo"
import "./style.css"
function App(){

    const[c1,cnc1]=useState("");
   function chng(event){
       cnc1(event.target.value);
}

const[c2,cnc2]=useState([]);
function fc(){
cnc2((old)=>{
    return[...old,c1]

})
}

function delitem(id){
    cnc2((old)=>{

        return old.filter((elem,index)=>{
            return index!==id;
        })
    })

}

    return(
<div className="bgmain">
<h1>ToDo List</h1>
    <input type="text" placeholder="Enter The Item" onChange={chng} ></input>
    <button onClick={fc}>+</button>
    <ul type="none">
     {c2.map((cl,index)=>{
     return<div className="division">
     <li>
    <div className="bal">
    <button id="hv" onClick={delitem}>X</button>
    </div>
    <div className="ca">
    <h3><Demo value={cl}
      key={index}
      id={index}
    ></Demo></h3>
     </div>
    </li>
    </div> 

      })}
    </ul>
</div>
    )
};

export default App;