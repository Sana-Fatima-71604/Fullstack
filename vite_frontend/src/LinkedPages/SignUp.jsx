import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../Components/Button';
import '../Styles/Sign.css'

function SignUp() {

    const [currentUservalue, updateUservalue] = useState("")
    const [currentPasswordvalue, updatePasswordvalue] = useState("")
    const [currentEmailvalue, updateEmailvalue] = useState("")

    // const isDisabled = currentEmailvalue === "" || currentPasswordvalue === "" || currentUservalue === "";
    const signinHandler = async () => {

            
            console.log(currentUservalue);
            console.log(currentPasswordvalue);
            console.log(currentEmailvalue);

            const user = {name: currentUservalue,
                email: currentEmailvalue,
                password: currentPasswordvalue
            }

            try {
                const response = await axios.post(
                    "http://localhost:4000/api/user/add", user
                )
                if (response.status === 201) {
                    toast(response.data.message)
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status === 409) {
                        toast(error.response.data.message)
                    } else {
                        toast("An error occurred: " + error.response.data.message)
                    }
                    console.log(error)
                }
        }
    }


    return (
        <div id ='signUp'>

                <h2>Sign Up</h2>


                    <div className='div'>Email Id: 
                    </div>

                    <input type="email" placeholder="Type your Usermail" value={currentEmailvalue} onChange={(e) => {
                        updateEmailvalue(e.target.value)
                    }}/>
                    <br/>

                    <div className='div'>Username: 
                    </div>

                    <input type="text" placeholder="Type your Username" value={currentUservalue} onChange={(e) => {
                        updateUservalue(e.target.value)
                    }}/>
                    <br/>

                    <div className='div'>Password: 
                    </div>


                    
                    <input type="text" placeholder="Type your Password" value={currentPasswordvalue} onChange={(e) => {
                        updatePasswordvalue(e.target.value)
                    }}/><br/><br/>


                    <Button name="SIGN UP" onsubmit={signinHandler}/>
                    <br/>
           
                <Link to='/signin' className="link">or Sign_In</Link><br/>
                

                <div className='link'>
                <Link to="#" className="fa fa-facebook"></Link>
                <Link to="#" className="fa fa-twitter"></Link>
                <Link to="#" className="fa fa-google"></Link>
                </div>

                <ToastContainer/>
        </div>
    );
};

export default SignUp;

            // console.log(user);
            
    // const response = await fetch('http://localhost:4000/api/user/add', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(user),
    // });

    // const result = await response.json();

        // if(response.status === 201) {
    //     toast(response.data.message)
    // } else if (response.data.status === 409) {
    //     console.log(response)
    //     toast(response.data.message)
    // }else {
    //     console.log("User not created.")
    // }
    // console.log(response);