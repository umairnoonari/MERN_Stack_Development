import style from '../CSS/model1.module.css'
import {GrClose} from 'react-icons/gr'
const MyModel = (props) => {
  return (
    <>
    <div className={style.MW}></div>
        <div className={style.MC}>
            <h2>Update Note</h2><button onClick={props.Closemodel1} className={style.btn1}><GrClose/></button>
            <input type='text' placeholder='Enter Title' className={style.input1}></input>
            <textarea placeholder='Enter Description' className={style.input2}></textarea>
            <div>
                <button className={style.btn3} onClick={props.Closemodel1}>Submit</button>
            </div>
            
        </div>
    </>
  )
}

export default MyModel
