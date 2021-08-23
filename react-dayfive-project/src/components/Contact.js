// import React from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers";
// import * as Yup from "yup";

// function Contact() {

//     // form validation rules 
//     const validationSchema = Yup.object().shape({
//         firstName: Yup.string()
//             .required('First Name is required'),
//         lastName: Yup.string()
//             .required('Last name is required')
//     });


//     // functions to build form returned by useForm() hook
//     const { register, handleSubmit, reset, errors } = useForm({
//         resolver: yupResolver(validationSchema)
//     });

//     function onSubmit(data) {
//         // display form data on success
//         alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
//     }

//     return (
//         <div>
//             <h2>Contact Form</h2>
//             <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
//                 <div className="mb-3">
//                     <label className="form-label">First Name: </label>
//                     <input type="text" ref={register}
//                         className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
//                         name="firstName"
//                         placeholder="First Name Here" />
//                     <div className="invalid-feedback">{errors.firstName?.message}</div>
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Last Name: </label>
//                     <input type="text" ref={register}
//                         className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
//                         name="lastName"
//                         placeholder="Last Name Here" />
//                     <div className="invalid-feedback">{errors.lastName?.message}</div>
//                 </div>
//                 <div className="mb-3">
//                     <button type="submit" className="btn btn-primary mr-1">Register</button>
//                     <button className="btn btn-secondary" type="reset">Reset</button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export { Contact };