import React from 'react'
import propTypes from 'prop-types'

import {TodoItem} from "./TodoItem"
export const Todos = (props)=>{
  
  
    let footerGap={
minHeight:"75vh",
marginBottom:"2vh"
    }
let StylingTodos={
    fontWeight:"bold",
    fontSize:"25px",
    color:"grey",
}
let listTodos={
fontWeight:"bolder",
fontSize:"30px",

}

    return(
        <div className="container my-3 "style={footerGap}>
            <h3 className="my-3" style={listTodos}>Todos List-</h3>
            
            {props.todos.length===0?<><p style={StylingTodos}>No Todos left, Add More :</p></> :   
       props.todos.map((item)=>{
       return (
       <>
       <TodoItem todo={item} key={item.sno} onDelete={props.onDelete}/>
       <hr/>
       </>
       )
                               }
                      )
       }
     
              </div>
    )
}