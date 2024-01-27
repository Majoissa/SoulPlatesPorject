import React from "react";
import InputFiled from "./donation/General-Components/InputFiled";
import Button from "./donation/General-Components/Button"
import Navbar from "./Navbar"
import {useFormik} from "formik";
import * as Yup from "yup"
import Footer from "./footer";
import Description from "./Description";


function ContactPage() {

    const formik = useFormik({
        initialValues: {
            userFirstName: "",
            userLastName: "",
            Age: "",
            Gender: "",
            userEmail: "",
            PhoneNumber: "",
            Address: "",
            userMessage: "",
        },

        validationSchema: Yup.object({
            userFirstName: Yup.string().required("Required")
                .max(20, "Must be 20 character or less")
                .required(" * Required"),
            userLastName: Yup.string()
                .max(20, "Must be 20 character or less")
                .required(" * Required"),
            Age: Yup.number()
                .required(" * Required")
                .max(100)
                .required(" * Required"),
            Gender: Yup.string().min(3)
                .max(6)
                .required(" * Required"),
            userEmail: Yup.string()
                .email('Must be a valid email').max(255)
                .required(" * Required"),
            PhoneNumber: Yup.string()
                .required(" * Required")
                .matches(/^[0-9]+$/, "must be at leas 8 Character")
                .min(9)
                .max(12, "Invalid Phone Number!"),
            Address: Yup.string()
                .min(10, "10character")
                .max(120, "character")
                .required(" * Required"),
            userMessage: Yup.string()
                .max(600, "Must be 600 character or less")
                .required(" * Message is required"),
        }),

        onSubmit: async (values) => {
            try {
                const response = await fetch("https://node-server-iota-six.vercel.app/contact-page/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(values)
                })
                const data = await response.json();
                if (response.ok) {
                    // If for is created
                    alert("Form created successfully");
                } else {
                    // manage wrong answers
                    if (data.error) {
                        // show the error
                        alert(data.error);
                    } else {
                        alert("There was an error processing your request.");
                    }
                }
            } catch (error) {
                console.error(error);
                alert('request could not created');
            }
        }

    })


    return (
        <>
            <Navbar/>
            <Description title="Contact us!"
                         text="If you are interested in work with us, don't hesitate to give us your information!"
                         imagen="https://coedupia.com/wp-content/uploads/2020/10/pacto-educativo-global.jpg"
                         descriptImg="contactate con nosotros"/>
            <div className="form-box">
                <form className="contact-form-control" onSubmit={formik.handleSubmit}>
                    <div className="form-body">
                        <div className="contact-form-input-group">
                            <div className="col-lg-1-6">
                                <label htmlFor="userFirstName">
                                    First Name:
                                    <InputFiled className="form-control"
                                                id="userFirstName"
                                                name="userFirstName"
                                                type="text"
                                                placeholder="First Name"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.userFirstName}
                                    />
                                    {formik.touched.userFirstName && formik.errors.userFirstName ?
                                        <p className="error"> {formik.errors.userFirstName} </p> : null}
                                </label>
                            </div>

                            <div className="col-lg-1-6">
                                <label htmlFor="userLastName">
                                    Last Name:
                                    <InputFiled className="form-control"
                                                id="userLastName"
                                                name="userLastName"
                                                type="text"
                                                placeholder="Last Name"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.userLastName}
                                    />
                                    {formik.touched.userLastName && formik.errors.userLastName ?
                                        <p className="error"> {formik.errors.userLastName} </p> : null}
                                </label>
                            </div>
                        </div>

                        <div className="contact-form-input-group">
                            <div className="col-lg-1-6">
                                <label htmlFor="Age">
                                    Age:
                                    <InputFiled className="form-control"
                                                id="Age"
                                                name="Age"
                                                type="number"
                                                placeholder="Age"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Age}
                                    />
                                    {formik.touched.Age && formik.errors.Age ?
                                        <p className="error"> {formik.errors.Age} </p> : null}
                                </label>
                            </div>

                            <div className="col-lg-1-6">
                                <label htmlFor="Gender">
                                    Gender:
                                    <InputFiled className="form-control"
                                                id="Gender"
                                                name="Gender"
                                                type="text"
                                                placeholder="Gender"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Gender}
                                    />
                                    {formik.touched.Gender && formik.errors.Gender ?
                                        <p className="error"> {formik.errors.Gender} </p> : null}
                                </label>
                            </div>

                        </div>
                        <div className="contact-form-input-group">
                            <div className="col-lg-1-6">
                                <label htmlFor="userEmail">
                                    Email:
                                    <InputFiled className="form-control"
                                                id="userEmail"
                                                name="userEmail"
                                                type="email"
                                                placeholder="Email"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.userEmail}
                                    />
                                    {formik.touched.userEmail && formik.errors.userEmail ?
                                        <p className="error"> {formik.errors.userEmail} </p> : null}
                                </label>
                            </div>

                            <div className="col-lg-1-6">
                                <label htmlFor="PhoneNumber">
                                    Phone Number:
                                    <InputFiled className="form-control"
                                                id="PhoneNumber"
                                                name="PhoneNumber"
                                                type="number"
                                                placeholder="Phone Number"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.PhoneNumber}
                                    />
                                    {formik.touched.PhoneNumber && formik.errors.PhoneNumber ?
                                        <p className="error"> {formik.errors.PhoneNumber} </p> : null}
                                </label>
                            </div>
                        </div>

                        <div className="contact-form-input-group">
                            <div className="col-lg-1-6">
                                <label htmlFor="Address">
                                    Address:
                                    <InputFiled className="form-control"
                                                id="Address"
                                                name="Address"
                                                type="message"
                                                placeholder="Type your address"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Address}
                                    />
                                    {formik.touched.Address && formik.errors.Address ?
                                        <p className="error"> {formik.errors.Address} </p> : null}
                                </label>
                            </div>
                            <div className="col-lg-1-6">
                                <label htmlFor="userMessage">
                                    Message:
                                    <InputFiled className="form-control"
                                                id="userMessage"
                                                name="userMessage"
                                                type="message"
                                                placeholder="Type your Message"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.userMessage}
                                    />
                                    {formik.touched.userMessage && formik.errors.userMessage ?
                                        <p className="error"> {formik.errors.userMessage} </p> : null}
                                </label>
                            </div>
                        </div>

                        <Button type="submit" text='Submit' className="form-control donationsBtn"/>
                    </div>
                </form>

            </div>


            <Footer/>;
        </>
    )
}

export default ContactPage;
