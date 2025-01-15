const { useEffect } = require("react")
const { useState } = require("react")
const Getdata=()=>{
    const [users,setUsers]=useState([])
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/users").then(data=>(data.json())).then(users=>setUsers(users))
        .catch(error=>console.log(error))
    },[])
    return(
        <div>
            <h1>Users...</h1>
            {users.map((ele)=>(
                <div style={{border:"1px"}} key={ele.id}>
                    <h3>Name: {ele.name}</h3>
                    <h3>Email: {ele.email}</h3>
                    <h3>Phone: {ele.phone}</h3>
                    <h3>Role: {ele.role}</h3>
                    <h3>Type: {ele.membership_type}</h3>
                </div>
            ))}
        </div>
    )
}
export default Getdata;