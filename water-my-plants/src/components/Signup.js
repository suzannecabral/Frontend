import React, { useEffect } from 'react';
import signupSchema from './signupSchema'

const Signup = (props) => {
    const { change, submit, disabled, errors, setSchema } = props


useEffect(()=>{
    setSchema(signupSchema)
},[])

//----------------------------//
//   Event Handlers
//----------------------------//

    const onChange = evt => {
        const { name,value } = evt.target
        change(name,value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }


    return(
        <div>
            <h1>Sign Up:</h1>
            <form onSubmit={onSubmit} id="signupForm">
                <label htmlFor="username">Username:
                 <input 
                    name="username" 
                    type="text" 
                    onChange={onChange}
                />
                </label>
                <label htmlFor="email">Email:
                 <input 
                    name="email" 
                    type="text" 
                    onChange={onChange}
                />
                </label>
                <label htmlFor="password">Password:
                 <input 
                    name="password" 
                    type="password" 
                    onChange={onChange}
                />
                </label>
                <button disabled={disabled}>Sign Up</button>
            </form>
            <div id="errorFrame">
                {errors.username}
                {errors.email}
                {errors.password}
            </div>
        </div>
    )
};

export default Signup;