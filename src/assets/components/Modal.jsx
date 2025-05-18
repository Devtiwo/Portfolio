import React from 'react';
import style from './Modal.module.css';
import { GiCheckMark } from "react-icons/gi";

const Modal = ({ show, onClose }) => {
  const closeModal= () => {
    onClose();
  }
  return (
    <section className={`${style.modal} ${show ? style.show : ""}`}>
        <article className={style.modalcontent}>
        <GiCheckMark className={style.success} />
        <p className="mx-auto mt-5 mb-5">
          Thanks for reaching out. I'll get back to you as soon as possible.
        </p>
        <button type="button" className={style.modalbtn} onClick={closeModal}>Ok</button>
        </article>
    </section>
  )
}

export default Modal