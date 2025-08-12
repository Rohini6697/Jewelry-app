import React from 'react'
import '../../styles/logincomponent/Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
    const [data,setdata] = useState ({
        username : '',
        email : ''
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

        if (!inputs.username) {
            errors.username = 'Username required';
        }
        
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
                    <input className='username' value={data.username} name='username' onChange={handlechange} type='text' placeholder='Username'></input><br/>
                    {errors.username && (
                            <span className='error-alert'>{errors.username}</span>
                        )}
                </div>
                <div className='pass'>
                    <input value={data.password} name='password' onChange={handlechange} type='password' placeholder='Enter Your Password'></input> <br/>
                    {errors.password && (
                            <span className='error-alert'>{errors.password}</span>
                        )}  
                </div>
                 <button type='submit'>Login</button>
                 <Link to = {'/signup'}>Don't have an account?</Link>
            </form>
           
        </div>
    </div>
  )
}

export default Login
