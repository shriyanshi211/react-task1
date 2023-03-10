import './Login.css';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
function Login(){
const [mobile,setMobile] = useState('');
const navigate = useNavigate()


const handleSubmit = (e)=>{
    e.preventDefault();
 console.log(mobile);
}
return(
<form onSubmit={handleSubmit}>
    <div className='form-container'>
        <input  value = {mobile}  onChange ={(e)=>setMobile(e.target.value)}type = "text" placeholder = "mobile number"/>
    </div>
    <button onClick = {()=>{navigate("/dashboard");}} type = 'submit' className='login-btn'>Log into your account</button>
    
</form>
)

}
export default Login;