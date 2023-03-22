import React from 'react';
import signInLogo from '../../../Assets/login.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contextAPI/Context';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SignUp = () => {

    const {createUserbyEmailandPass} = useContext(AuthContext)

        // toast
        const toastifyAlert = () => toast("successfully registered",{
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    

    // login manualy by email  and pass 
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const fName = form.fName.value + form.lName.value;
        const userEmail = form.userEmail.value;
        const userPassword = form.userPassword.value;


        createUserbyEmailandPass(userEmail,userPassword)
        .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset()
            toastifyAlert()
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage , errorCode);
          });

        


    }


    return (
        <div className='bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400 flex justify-center items-center'>
        <div>
            <div className='flex justify-center'><img className='w-48' src={signInLogo} alt="logoPic" srcset="" /></div>
            <h1 className='text-white text-4xl'>Account Sign-In</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Frist Name" name='fName' className="input w-full max-w-xs bg-orange-200 mb-4" /> <br />
                <input type="text" placeholder="Last Name" name='lName' className="input w-full max-w-xs bg-orange-200 mb-4"  /> <br />
                <input title='coming soon' type="text" placeholder="Up your profile pic URL" name='proPic' className="input w-full max-w-xs bg-orange-200 mb-4"  readOnly/> <br />
                <input type="email" placeholder="email" name='userEmail' className="input w-full max-w-xs bg-orange-200 mb-4"  /> <br />
                <input type="password" placeholder="password" name='userPassword'  className="input w-full max-w-xs  bg-orange-200 mb-8" /> <br />
                <a href="/" className='text-orange-700'> Forget password ?</a> <br />
                <button className='btn bg-orange-900 w-80 mb-8'>Sign-Up</button>

            </form>

            <span className='block text-white'>log in with other in SIGN-IN page</span><hr />
            

            <span>have Account? <Link to='/signin' className='text-orange-700 underline'>Sign-In</Link></span>
        </div>
        <ToastContainer />
   </div>
    );
};

export default SignUp;