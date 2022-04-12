import React from 'react'
export default function Footer(){
    let footerStyle={

     height:"5vh",
               width:"100%",
     

    }
    return(
        <div>
<footer className="text-center bg-dark text-light" style={footerStyle} ><p >Copyright &copy; Mytodolist.com</p></footer>
</div>
    )

}