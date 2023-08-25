import style from '../CSS/model.module.css'
import {GrClose} from 'react-icons/gr'
const Model = (props) => {
  return (
    <>
    <div className={style.MW}></div>
        <div className={style.MC}>
            <h2>Add Note</h2><button onClick={props.Closemodel} className={style.btn}><GrClose/></button>
            <input type='text' placeholder='Enter Title' className={style.input1}></input>
            <textarea placeholder='Enter Description' className={style.input2}></textarea>
            <div>
                <button className={style.btn3} onClick={props.Closemodel}>Submit</button>
            </div>
            
        </div>
    </>
  )
}

export default Model
