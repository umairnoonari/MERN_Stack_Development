import React, { useState } from "react";
import style from "../CSS/addnote.module.css";
import { useContext } from "react";
import Context from "../Context/Context";
import { BsSearch } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import Model  from "./Model";
const AddNote = () => {
  const context = useContext(Context);
  const { sidebar } = context;
  const [model,setModel]=useState(false)
  const Closemodel=()=>setModel(false)
  return (
    <div className={!sidebar ? style.container : style.container1}>
      <div className={sidebar ? style.box1 : style.box2}>
        <input type="text" className={style.input}></input>
        <BsSearch className={style.input1}></BsSearch>
        <button className={style.btn} onClick={()=>setModel(true)}>
          <AiOutlinePlus className={style.ic_4} /> Add Note{" "}
        </button>
        {model&&<Model Closemodel={Closemodel}></Model>}
        <div className={style.col}>
        <div className={style.box3}>
            <header className={style.header}>Header</header>
            <div className={style.des}>
              <p>jasflkjsda klfjklasdjf klajsdfkljdsf lkjdklsfjkldsjfk lasldjfklsd jflksjdfklj sdaaklfj dsklaj fldksajfkl adsjfkl djasfkl</p>
            </div>
        </div>
        <div className={style.box3}>
            <header className={style.header}>Header</header>
            <div className={style.des}>
              <p>jasflkjsda klfjklasdjf klajsdfkljdsf lkjdklsfjkldsjfk lasldjfklsd jflksjdfklj sdaaklfj dsklaj fldksajfkl adsjfkl djasfkl</p>
            </div>
        </div>
        <div className={style.box3}>
            <header className={style.header}>Header</header>
            <div className={style.des}>
              <p>jasflkjsda klfjklasdjf klajsdfkljdsf lkjdklsfjkldsjfk lasldjfklsd jflksjdfklj sdaaklfj dsklaj fldksajfkl adsjfkl djasfkl</p>
            </div>
        </div>
        <div className={style.box3}>
            <header className={style.header}>Header</header>
            <div className={style.des}>
              <p>jasflkjsda klfjklasdjf klajsdfkljdsf lkjdklsfjkldsjfk lasldjfklsd jflksjdfklj sdaaklfj dsklaj fldksajfkl adsjfkl djasfkl</p>
            </div>
        </div>
        <div className={style.box3}>
            <header className={style.header}>Header</header>
            <div className={style.des}>
              <p>jasflkjsda klfjklasdjf klajsdfkljdsf lkjdklsfjkldsjfk lasldjfklsd jflksjdfklj sdaaklfj dsklaj fldksajfkl adsjfkl djasfkl</p>
            </div>
        </div>
        <div className={style.box3}>
            <header className={style.header}>Header</header>
            <div className={style.des}>
              <p>jasflkjsda klfjklasdjf klajsdfkljdsf lkjdklsfjkldsjfk lasldjfklsd jflksjdfklj sdaaklfj dsklaj fldksajfkl adsjfkl djasfkl</p>
            </div>
        </div>
        <div className={style.box3}>
            <header className={style.header}>Header</header>
            <div className={style.des}>
              <p>jasflkjsda klfjklasdjf klajsdfkljdsf lkjdklsfjkldsjfk lasldjfklsd jflksjdfklj sdaaklfj dsklaj fldksajfkl adsjfkl djasfkl</p>
            </div>
        </div>
        <div className={style.box3}>
            <header className={style.header}>Header</header>
            <div className={style.des}>
              <p>jasflkjsda klfjklasdjf klajsdfkljdsf lkjdklsfjkldsjfk lasldjfklsd jflksjdfklj sdaaklfj dsklaj fldksajfkl adsjfkl djasfkl</p>
            </div>
        </div>
        <div className={style.box3}>
            <header className={style.header}>Header</header>
            <div className={style.des}>
              <p>jasflkjsda klfjklasdjf klajsdfkljdsf lkjdklsfjkldsjfk lasldjfklsd jflksjdfklj sdaaklfj dsklaj fldksajfkl adsjfkl djasfkl</p>
            </div>
        </div>
        <div className={style.box3}>
            <header className={style.header}>Header</header>
            <div className={style.des}>
              <p>jasflkjsda klfjklasdjf klajsdfkljdsf lkjdklsfjkldsjfk lasldjfklsd jflksjdfklj sdaaklfj dsklaj fldksajfkl adsjfkl djasfkl</p>
            </div>
        </div>
        <div className={style.box3}>
            <header className={style.header}>Header</header>
            <div className={style.des}>
              <p>jasflkjsda klfjklasdjf klajsdfkljdsf lkjdklsfjkldsjfk lasldjfklsd jflksjdfklj sdaaklfj dsklaj fldksajfkl adsjfkl djasfkl</p>
            </div>
        </div>
        <div className={style.box3}>
            <header className={style.header}>Header</header>
            <div className={style.des}>
              <p>jasflkjsda klfjklasdjf klajsdfkljdsf lkjdklsfjkldsjfk lasldjfklsd jflksjdfklj sdaaklfj dsklaj fldksajfkl adsjfkl djasfkl</p>
            </div>
        </div>
        <div className={style.box3}>
            <header className={style.header}>Header</header>
            <div className={style.des}>
              <p>jasflkjsda klfjklasdjf klajsdfkljdsf lkjdklsfjkldsjfk lasldjfklsd jflksjdfklj sdaaklfj dsklaj fldksajfkl adsjfkl djasfkl</p>
            </div>
        </div>
        <div className={style.box3}>
            <header className={style.header}>Header</header>
            <div className={style.des}>
              <p>jasflkjsda klfjklasdjf klajsdfkljdsf lkjdklsfjkldsjfk lasldjfklsd jflksjdfklj sdaaklfj dsklaj fldksajfkl adsjfkl djasfkl</p>
            </div>
        </div>
        <div className={style.box3}>
            <header className={style.header}>Header</header>
            <div className={style.des}>
              <p>jasflkjsda klfjklasdjf klajsdfkljdsf lkjdklsfjkldsjfk lasldjfklsd jflksjdfklj sdaaklfj dsklaj fldksajfkl adsjfkl djasfkl</p>
            </div>
        </div>
        <div className={style.box3}>
            <header className={style.header}>Header</header>
            <div className={style.des}>
              <p>jasflkjsda klfjklasdjf klajsdfkljdsf lkjdklsfjkldsjfk lasldjfklsd jflksjdfklj sdaaklfj dsklaj fldksajfkl adsjfkl djasfkl</p>
            </div>
        </div>
        <div className={style.box3}>
            <header className={style.header}>Header</header>
            <div className={style.des}>
              <p>jasflkjsda klfjklasdjf klajsdfkljdsf lkjdklsfjkldsjfk lasldjfklsd jflksjdfklj sdaaklfj dsklaj fldksajfkl adsjfkl djasfkl</p>
            </div>
        </div>
        <div className={style.box3}>
            <header className={style.header}>Header</header>
            <div className={style.des}>
              <p>jasflkjsda klfjklasdjf klajsdfkljdsf lkjdklsfjkldsjfk lasldjfklsd jflksjdfklj sdaaklfj dsklaj fldksajfkl adsjfkl djasfkl</p>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
