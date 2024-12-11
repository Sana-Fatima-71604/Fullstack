import { Link } from 'react-router-dom';
import { useState } from "react";
import '../Styles/Sign.css'
import axios from 'axios';
import {toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {

    const [currentUservalue, updateUservalue] = useState("")
    const [currentPasswordvalue, updatePasswordvalue] = useState("")

    const isDisabled = currentPasswordvalue === "" || currentUservalue === "";

    const signinHandler = async () => {

        console.log(currentUservalue);
        console.log(currentPasswordvalue);

        const user= {name: currentUservalue, password: currentPasswordvalue}
        try {
            const response = await axios.post(
                "http://localhost:4000/api/user/login", user
            )
            if (response.status === 200) {
                toast(response.data.message)
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    toast(error.response.data.message)
                } else {
                    toast("An error occurred: " + error.response.data.message)
                }
                console.log(error)
            }
        

    }
    }

    return (
        <div id="login">
            
                <h2>Login</h2>

                <div className='div'>Username
                </div>

                    <input type="text" placeholder="Type your Username" value={currentUservalue} onChange={(e) => {
                        updateUservalue(e.target.value)
                    }}/>
                    <br/>
                    <div className='div'>Password</div>
                    <input type="text" placeholder="Type your Password" value={currentPasswordvalue} onChange={(e) => {
                        updatePasswordvalue(e.target.value)
                    }}/><br/>


                    <button type="submit" onClick={signinHandler} className="btn btn-primary" disabled={isDisabled}>LOGIN</button><br/>
      

                <Link to='/signup' className="link">or Sign_Up</Link><br/>

                <div className='link'>
                <Link to="#" className="fa fa-facebook"></Link>
                <Link to="#" className="fa fa-twitter"></Link>
                <Link to="#" className="fa fa-google"></Link>
                </div>
            <ToastContainer/>
        </div>
    );
}

export default SignIn;