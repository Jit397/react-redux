import React from 'react'

//props use
//const User = (props) =>{
    //const {data} = props
   // console.log(props.data.name);
   function User(props) {
  return (
    <div>
    <h1>User Component</h1>
    <h1>{props.data.name}</h1>
    <h2>{props.data.age}</h2>
    </div>
  )
}

export default User