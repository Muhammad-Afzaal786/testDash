import React from 'react'

function ErrorPage() {
    return (
        <div>
           <div style={
               {    paddingTop:'5rem',
                   display:'flex',
                   justifyContent:'center',
                   color:"#0abde3",
                   fontWeight:"bold"

               }
           }>
           <h1 style={{fontWeight:"800",fontSize:"3rem"}}>ERROR! PAGE NOT FOUND</h1>
           </div>
        </div>
    )
}

export default ErrorPage
