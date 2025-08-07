import React from 'react'
import '../../styles/logincomponent/Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
    const [data,setdata] = useState ({
        firstname : '',
        secondname : '',
        email : '',
        password : ''
    })

    const [errors,seterrors] = useState({});
    // const [submit,setsubmit] = useState(false)

    const handlechange = (e) => {
        const {name,value} = e.target;
        setdata({
            ...data,
            [name]:value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validationForm(data);
        seterrors(newErrors);
        // setsubmit(true)

        if (Object.keys(newErrors).length === 0) {
            console.log ('form submited')
            console.log({data})
        }
        else {
            console.log ('form submited')
        }
    }





    const validationForm = (inputs) => {
        const errors = {};

        if (!inputs.firstname) {
            errors.firstname = 'Firstname required';
        }
        // else if(inputs.username.length < 6) {
        //     errors.username = 'username must be at least 6 character long'
        // }
        if (!inputs.secondname) {
            errors.secondname = 'Secondname required';
        }
        // else if(inputs.username.length < 6) {
        //     errors.username = 'username must be at least 6 character long'
        // }
        if (!inputs.email) {
            errors.email = 'Email required';
        }
        // else if(inputs.username.length < 6) {
        //     errors.username = 'username must be at least 6 character long'
        // }
        if (!inputs.password) {
            errors.password = 'Passsword required';
        }
        else if(inputs.password.length < 6) {
            errors.password = 'password must be at least 6 character long'
        }
        return errors;
    }


  return (
    <div className='login'>
        <div>
            <img src='https://static.wixstatic.com/media/c837a6_424ef453cdd0450785ca5cceee609629~mv2.jpg/v1/fill/w_896,h_923,fp_0.44_0.43,q_85,enc_avif,quality_auto/A_close_up_of_an_earring_a_model_wearing_gold_rings.jpg'></img>
        </div>
        <div >
            <form className='login-form' onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div>
                    <div>
                        <input value={data.firstname} name='firstname' onChange={handlechange} type='text' placeholder='First Name'></input>
                        {errors.firstname && (
                            <span className='error-alert'>{errors.firstname}</span>
                        )}
                    </div>
                    <div>
                        <input value={data.secondname} name='secondname' onChange={handlechange} type='text' placeholder='Last Name'></input> 
                        {errors.secondname && (
                            <span className='error-alert'>{errors.secondname}</span>
                        )} 
                    </div>
                </div>
                <div>
                    <input value={data.email} name='email' onChange={handlechange} type='email' placeholder='Email'></input><br/>
                    {errors.email && (
                            <span className='error-alert'>{errors.email}</span>
                        )}
                </div>
                <div>
                    <input value={data.password} name='password' onChange={handlechange} type='password' placeholder='Enter Your Password'></input> <br/>
                    {errors.password && (
                            <span className='error-alert'>{errors.password}</span>
                        )}  
                </div>
                {/* <div className='check'>
                    <input type='checkbox'></input>
                    <label> I agree with the <Link to='#'>Terms & Condition</Link></label>
                </div> */}
                 <button type='submit'>Login</button>
            </form>
           
        </div>
    </div>
  )
}

export default Login
