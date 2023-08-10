import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "./Context";
const UserData = () => {
  const navigate=useNavigate()
  const [data,setData]=useState([])
  const context=useContext(Context)
  useEffect(()=>{
    context.fetchData(setData)
  },[])
  return (
    <div className="row d-flex justify-content-center mt-5">
      <div className="col-6">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((itm,index)=><tr>
              <th scope="row">{index+1}</th>
              <td>{itm.username}</td>
              <td>{itm.email}</td>
              <td>
                <button className="btn btn-success mx-3"onClick={()=>{
                    navigate('/update/'+itm._id)
                }}>Update</button>
                <button className="btn btn-danger" onClick={()=>context.Delete(itm._id,setData)}>Delete</button>
              </td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserData;
