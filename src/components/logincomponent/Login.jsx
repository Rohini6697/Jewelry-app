import React from 'react'
import '../../styles/logincomponent/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

const Login = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        role :'customer'
    })

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const handleInputChange = (e) => {
        const { value, name } = e.target
        setUserData(prev=> ({ ...prev, [name]: value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post(
                'https://ecommerce-project-backend-nodejs.onrender.com/api/auth/login',
                userData
            );
            const token = res.data.token;
            if (token) {
                localStorage.setItem('access_token', token);
                toast.success('Login Successful');
                navigate('/');
            } else {
                toast.error('Authentication token not received. Please try again.');
            }
        } catch (error) {
            console.error(error, 'error');
            const errorMessage = error.response?.data?.message || 'Login failed. Please check your credentials.';
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };


  return (
    <div className='login'>
        <div>
            <img src='https://static.wixstatic.com/media/c837a6_424ef453cdd0450785ca5cceee609629~mv2.jpg/v1/fill/w_896,h_923,fp_0.44_0.43,q_85,enc_avif,quality_auto/A_close_up_of_an_earring_a_model_wearing_gold_rings.jpg'></img>
        </div>
        <div >
            <form className='login-form' onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div>
                    <input value={userData.email} name='email' onChange={handleInputChange} type='text' placeholder='email'></input><br/>
                    {/* {errors.username && (
                            <span className='error-alert'>{errors.username}</span>
                        )} */}
                </div>
                <div className='pass'>
                    <input value={userData.password} name='password' onChange={handleInputChange} type='password' placeholder='Enter Your Password'></input> <br/>
                    {/* {errors.password && (
                            <span className='error-alert'>{errors.password}</span>
                        )}   */}
                </div>
                 <button type='submit'>Login</button>
                 <Link to = {'/signup'}>Don't have an account?</Link>
            </form>
           
        </div>
    </div>
  )
}

export default Login
