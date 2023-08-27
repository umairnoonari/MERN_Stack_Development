import style from '../CSS/model1.module.css'
import {GrClose} from 'react-icons/gr'
import { useFormik } from 'formik'
import axios from 'axios'
import { useSelector } from 'react-redux'
const MyModel = (props) => {
  const mystate=useSelector(state=>state.notes)
  const formik=useFormik({
    initialValues:{title:"N",description:"N"},
    onSubmit:values=>{

    },
    validate:values=>{
      const errors={}
      if(!values.title||values.title==="N")
      {
         errors.title="Title is required."
      }
      if(!values.description||values.description==="N")
      {
        errors.description="Description is required."
      }
      if(values.title.length>=12)
      {
         errors.titleLength="Title should be less than 13 character."
      }
      return errors
    }
  })
  return (
    <>
    <div className={style.MW}></div>
        <div className={style.MC}>
          <form>
            <h2>Update Note</h2><button onClick={props.Closemodel1} className={style.btn1}><GrClose/></button>
            <input type='text' placeholder='Enter Title' className={style.input1} value={formik.values.title==="N"?mystate.title:""} onBlur={formik.handleBlur} onChange={formik.handleChange}></input>
            <textarea placeholder='Enter Description' className={style.input2} value={formik.values.title==="N"?mystate.title:""} onBlur={formik.handleBlur} onChange={formik.handleChange}></textarea>
            <div>
                <button className={style.btn3} onClick={props.Closemodel1}>Submit</button>
            </div>
          </form>
        </div>
    </>
  )
}

export default MyModel
