import { Formik,useFormik } from "formik";
import { useContext, useState } from "react";
import H from "./H";
function Formik1(props) {
  const [data,setData]=useState([])
  const [count,setCount]=useState(0)
  const context=useContext(H)
//   const {Username}=context
//   console.log(context)
  const formik=useFormik({
    initialValues:{Username:"",Password:""},
    onSubmit:values=>{
      setData({...data,Username:values.Username,Password:values.Password})
    },
    validate:values=>{
      let errors={}
      if(!values.Username)
      {
         errors.Username="Username is required"
      }
      if(!values.Password)
      {
        errors.Password="Password is required"
      }
      return errors
    }
  })
  function Decrement(num)
  {
      setCount(count-1)
  }
  return (
    <>
    <h1>this page is property of Mr:{context.Username}</h1>
    <div className="row" style={{display:'flex',position:'relative',top:250,justifyContent:"center"}}>
      <form className="col-6" onSubmit={formik.handleSubmit}>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="Username"
            placeholder="Username"
            onChange={formik.handleChange}
            value={formik.values.Username}
            onBlur={formik.handleBlur}
          />
          {formik.touched.Username?<div style={{color:"red",fontWeight:"blod"}}>{formik.errors.Username}</div>:null}
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            name="Password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.Password}
            onBlur={formik.handleBlur}
          />
          {formik.touched.Password?<div style={{color:"red",fontWeight:"blod"}}>{formik.errors.Password}</div>:null}
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    {context.count}
    <button className="btn btn-primary" onClick={()=>context.Increment(10)}>+</button>
    </>
  );
}

export default Formik1;
