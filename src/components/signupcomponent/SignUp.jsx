import React from 'react'
// import '../../styles/logincomponent/Login.css'
import '../../styles/signupcomponent/SignUp.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
const Login = () => {

       const navigator = useNavigate()
    const [userData, setUserData] = useState({
        firstname : '',
        secondname : '',
        email : '',
        password : '',
        role : 'customer'
    })
    const [loading, setLoading] = useState(false)
    const handleInputChange = (e) => {
        const { value, name } = e.target
        setUserData(prev=> ({ ...prev, [name]: value }))
    }
    const handleRegister = async (data)=> {
         await axios.post('https://ecommerce-project-backend-nodejs.onrender.com/api/auth/register', data, { } )
        .then(res=> {
            // console.log(res, ' response')
            window.localStorage.setItem('access_token', res.data.token)
            window.localStorage.setItem('user_data', JSON.stringify(res.data.data))
            toast.success("Successfully Registered")
            navigator('/')
        })
        .catch(err=> {
            console.log(err, 'err')
            toast.error(err.response.data.message)
        }).finally(()=> {
            setLoading(false)
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        
        const formData = { ...userData, name: `${userData.firstname} ${userData.secondname}`}
        handleRegister(formData)
    };



    // const validationForm = (inputs) => {
    //     const errors = {};

    //     if (!inputs.firstname) {
    //         errors.firstname = 'Firstname required';
    //     }
    //     if (!inputs.secondname) {
    //         errors.secondname = 'Secondname required';
    //     }
        
    //     if (!inputs.email) {
    //         errors.email = 'Email required';
    //     }
    //     else if (!inputs.email.includes('@')) {
    //         errors.email = 'incorrect email address'
    //     }
        
    //     if (!inputs.password) {
    //         errors.password = 'Passsword required';
    //     }
    //     else if(inputs.password.length < 6) {
    //         errors.password = 'password must be at least 6 character long'
    //     }
    //     return errors;
    // }
return (
    <div className='login'>
        <div>
            <img src='https://static.wixstatic.com/media/c837a6_424ef453cdd0450785ca5cceee609629~mv2.jpg/v1/fill/w_896,h_923,fp_0.44_0.43,q_85,enc_avif,quality_auto/A_close_up_of_an_earring_a_model_wearing_gold_rings.jpg'></img>
        </div>
        <div >
            <form className='login-form' onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <div className='first'>
                    <div>
                        <input value={userData.firstname} name='firstname' onChange={handleInputChange} type='text' placeholder='First Name'></input>
                    </div>
                    <div>
                        <input value={userData.secondname} name='secondname' onChange={handleInputChange} type='text' placeholder='Last Name'></input> 
                    </div>
                </div>
                <div className='general general1'>
                    <input value={userData.email} name='email' onChange={handleInputChange} type='email' placeholder='Email'></input><br/>
                </div>
                <div className='general'>
                    <input value={userData.password} name='password' onChange={handleInputChange} type='password' placeholder='Enter Your Password'></input> <br/>
                </div>
                 <button type='submit'
                 disabled={loading}>{loading ? 'Loading.....' : 'Register' }
                 </button>
            </form>
           
        </div>
    </div>
  )
}

export default Login
