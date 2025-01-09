React strict mode renderst its component twice in development.

# Hooks
Hooks allow us to "hook" into React features such as state and lifecycle methods.

## State
    - React components has a built-in state object.
    - The state object is where you store property values that belong to the component.
    - When the state object changes, the component re-renders.

<!-- react-hook-form -->
## useForm - basic
    - library to handle form data by managing & submiting data, enforce validation and provide visual Feedback.
    - track & amnage data without re-rendering the form. **great for performance
    - un-contoller input behaviour
    Form State : 

### useForm() : register a field 
<!-- HOOK-FORM -->
<!-- MANAGE form-data -->
<!-- Install useForm() hook -->
    npm i react-hook-form
<!-- Accessing useForm hook -->
    import { useForm } from "react-hook-form";
    const { register } = useForm() 
<!-- Registering the field in useForm  -->
    <input {...register("inputFieldName")} />

<!-- DEV-TOOLS : to view the value, touched, dirty -->
<!-- Installing DevTools -->
    npm i -D @hookform/devtools
<!-- Acessing -->
    import { DevTool } from "@hookform/devtools";
<!-- Connecting with useForm -->
    const { register, control } = useForm() 
    <DevTool control={control} />

### Form Submission
<!-- FORM SUBMISSION -->
<!-- SUBMIT for-data -->
<!-- interface -->
type FormValues{
    inputValue1 : string;
    inputValue2 : string;
    inputValue3 : string
}
<!-- Access -->
    const { register, control, handleSubmit } = useForm<FormValues>(); 
    const handleFormSubmit = (
        data : FormValues
    ) = { 
        console.log('Form Submitted', data)
    }
<!-- Connecting with form -->
    <form onSubmit={handleSubmit(handleFormSubmit)}>

### Form vaidation
<!-- FORM VALIDATION -->
<!-- Prevent browser validtion -> 'noValidate' -->
    <form 
        onsubmit={ handleSubmit( handleFormSubmit ) }
        noValidate
    >
#### required
<!-- adding basic validation on submit **"required" to field -->
    <input 
        {...register(   "inputFieldName",
                        // validation 
                        { required : "required's message" } 
                    )
        } 
    />
    <input 
        {...register(   "inputFieldName01",
                        // validation 
                        { required : {
                                value : true,
                                message : "required's message" 
                            }
                        } 
                    )
        } 
    />
#### pattern
<!-- adding email validation on submit **"pattern" to field -->
    <input
        type = "email"
        id = "email" 
        {...register(   "email", 
                        // validation 
                        { pattern : {
                                value : /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ ,
                                message : "Invalid email"
                            } 
                        } 
                    )
        } 
    />

### Dispaly error message
<!-- Dispaly feedback -->
<!-- Access 'error' from useForm() -->
    const { register, control, handleSubmit, formState : { error } } = useForm();
<!-- in html, below respective input field -->
    <p> { error.inputFieldName?.message } </p>

### Custom validation
<!-- CUSTOM VALIDATION -->
#### as function
    <input
        type = "email"
        id = "email" 
        {...register(   "email", 
                        // validation 
                        { pattern : { // object
                                value : /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ ,
                                message : "Invalid email"
                            } 
                        },
                        // custom-validtion : can have multilple conditions
                        validation : (fieldValue) => { // fn
                            return(
                                fieldVaue !== "nithin@gmail.com" 
                                    || "error message for validation failure"
                            );
                        },
                    )
        } 
    />
#### as object of fn
    <input
        type = "email"
        id = "email" 
        {...register(   "email", 
                        // validation 
                        { pattern : {
                                value : /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ ,
                                message : "Invalid email"
                            } 
                        },
                        // validation as object of fn
                        validation : { // multiple custom rule
                                notAdmin : (fieldValue) => { // fn
                                                return(
                                                    fieldVaue !== "nithin@gmail.com" 
                                                        || "error message for validation failure"
                                                );
                                            },
                                notBlackListed : () => {}
                        }
                    )
        } 
    />



# Router
React Router is a JavaScript framework that lets us handle client and server-side routing in React applications

# Render
React Render is the technique that can 'redirect a page' with the help of function render(). 

# Redux
Redux is an open-source JavaScript library for managing and centralizing application state.

# Query
React Query is a JavaScript library designed to simplify the complex task of data fetching and caching in React applications.

# Formik
React hooks and components for hassle-free form validation.

# Testing
React Testing Library is a JavaScript testing utility that provides a set of utility functions that allow developers to interact with the components, such as clicking buttons, entering text, and checking for the presence of certain elements.