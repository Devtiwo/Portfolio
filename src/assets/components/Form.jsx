import React, { useState } from "react";
import style from "./Form.module.css";
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";
import Modal from "./Modal";

const Form = () => {
  const [showModal, setShowModal] = useState(false);
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      message: ""
    },
    validationSchema: yup.object({
      fullname: yup.string().required("Enter your Full Name"),
      email: yup
        .string()
        .required("Enter your email")
        .email("Enter a valid email"),
      message: yup.string().required("Enter your message"),
    }),
    onSubmit: (values, { resetForm }) => {
      axios
        .post("https://formspree.io/f/xgegjzwo", values)
        .then((response) => {
          if (response.status === 200) {
            setShowModal(true);
            resetForm();
          } else {
            alert("Error sending message! pls try again");
          }
        })
        .catch((error) => {
          console.error("Error sending message:", error);
          alert("An error occurred. Please try again later.");
        });
    },
  });
  const handleCloseModal = () => {
    setShowModal(false);
  }
  return (
    <section>
      <form
        className={style.form}
        method="POST"
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Enter your Full Name"
            onChange={formik.handleChange}
            value={formik.values.fullname}
            onBlur={formik.handleBlur}
          />
          <small className="text-danger">
            {formik.touched.fullname && formik.errors.fullname}
          </small>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          <small className="text-danger">
            {formik.touched.email && formik.errors.email}
          </small>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            rows="7"
            cols="50"
            name="message"
            id="message"
            placeholder="Enter your Message"
            onChange={formik.handleChange}
            value={formik.values.message}
            onBlur={formik.handleBlur}
          ></textarea>
          <small className="text-danger">
            {formik.touched.message && formik.errors.message}
          </small>
        </div>
        <div>
          <button type="submit">Get in touch </button>
        </div>
      </form>
      {<Modal show={showModal} onClose={handleCloseModal} />}
    </section>
  );
};

export default Form;
