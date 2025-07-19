import React,{useState , useEffect} from 'react'
import {Form ,Input , Button ,message} from 'antd';
import { Link ,useNavigate} from 'react-router-dom';
//import axios from 'axios'
import axiosInstance from '../utils/axios';
//import Password from 'antd/es/input/Password';
import Spinner from '../components/Spinner';


const Login = () => {
    const[loading,setLoading]=useState(false)
    const navigate = useNavigate()
    const SubmitHandler=async(values)=>{
    //console.log(values);
    try{
       setLoading(true)
       //const {data}= await axios.post('/users/login' , values)
       const {data} = await axiosInstance.post('/user/login', values)
       //const {data} = await axiosInstance.post('/user/login', values);
       setLoading(false)
       message.success('login success')
       localStorage.setItem('user', JSON.stringify({...data.user,Password: ""}))
       navigate('/')
    }
    catch(error){
      setLoading(false)
      message.error("something went wrong")
    }
  };

  //prevent for login user
    useEffect(()=>{
      if(localStorage.getItem('user')){
        navigate('/');
        }
      },[navigate]);

  return (
    <>
       <div className ="login-page">
           {loading && <Spinner />}
          <div className="auth-box">
              <div className="auth-image">
              <h1 className='welcome-heading'>Welcome to Spendly</h1>
              </div>
                <div className="auth-form">
                <Form layout="vertical" onFinish={SubmitHandler}>          
                <h1>Login Form</h1>

                <Form.Item label="Email" name="email">
                <Input type="email"/>
                </Form.Item>
                <Form.Item label="Password" name="password">
                <Input type="password"/>
                </Form.Item>
                <div className='d-flex justify-content-between'>
                <Link to="/register">Not A User ? Check Here to register</Link>
                <Button type="primary" htmlType="submit">Login</Button>
                </div>
                </Form>
        </div>
        </div>
      </div>
    </>
  )
}

export default Login


