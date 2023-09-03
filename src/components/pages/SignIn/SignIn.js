import React from 'react';
import './style.css';
import signInLogo from '../../../Assets/login.png'
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contextAPI/Context';




// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';








const SignIn = () => {

    const authData = useContext(AuthContext)
    const {loginWithGoogle,loginByEmailandPass} = authData;


    const location = useLocation();
    const from = location.state?.from?.pathname || '/' ;


    const navigate = useNavigate()



      // toast
      const toastifyAlert = () => toast("successfully loged in",{
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

    // login by google
    const handleGoogleLogin =()=>{
        loginWithGoogle()
        .then((result) => {
            const user = result.user;
            console.log(user)
            
            navigate(from,{replace:true})
         

          }).catch((error) => {
            console.error(error);
          })
          
    }





// login manually by email  and pass 
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const userEmail = form.userEmail.value;
        const userPassword = form.userPassword.value;

        

        loginByEmailandPass(userEmail,userPassword)
        .then((result) => {
             
            const user = result.user;
            console.log(user);
            form.reset()
            toastifyAlert()


            //   get jwt token 
            const currentUser = {email:user.email}

            fetch('https://photo-grapher-server.vercel.app/jwt',{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {

                // set this data on local storage 
                localStorage.setItem('JWT-token' , data.token )
                console.log(data)
                navigate(from,{replace:true})
            })






          })
          .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
          })
          .finally(()=>{
            
          })

    }






    return (
       <div className='bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400 flex justify-center items-center'>
            <div>
                <div className='flex justify-center'><img className='w-48' src={signInLogo} alt="logoPic" srcSet="" /></div>
                <h1 className='text-white text-4xl'>Account Sign-In</h1>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email" name='userEmail' className="input w-full max-w-xs bg-orange-200 my-4"  /> <br />
                    <input type="password" placeholder="password" name='userPassword'  className="input w-full max-w-xs  bg-orange-200 mb-8" /> <br />
                    <a href="/" className='text-orange-700'> Forget password ?</a> <br />
                    <button className='btn bg-orange-900 w-80 mb-8'>Sign-In</button>

                </form>

                <span className='block text-white'>Or log in with</span><hr />
                    <div className='flex justify-center mb-8'>
                        
                        <span onClick={handleGoogleLogin} className='p-3 bg-white  rounded-full text-orange-800 m-1'><AiOutlineGoogle></AiOutlineGoogle></span>
                        <span className='p-3 bg-white  rounded-full text-orange-800 m-1'><FaFacebook></FaFacebook></span>
                        <span className='p-3 bg-white  rounded-full text-orange-800 m-1'><AiOutlineGithub></AiOutlineGithub></span>
                    </div>

                <span>Don't have Account? <Link to='/signup' className='text-orange-700 underline'>Sign Up</Link></span>
            </div>
            <ToastContainer />
       </div>
    );
};

export default SignIn;