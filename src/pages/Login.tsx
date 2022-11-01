import { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = ():JSX.Element => {
  const authContext = useAuth();
  const user = authContext?.user;
  const navigate = useNavigate();
    
  const handleLogin = () => {
    console.log('handleLogin');
    
    authContext.signInWithGoogle().then(
      () => {
        console.log("Success");      
      }).catch(
      (error) => {
        console.log(error);
      }
    )
  };

  useEffect(() => {
    if(user) {
      navigate('/');
    }
  }, [user, navigate]);


  return (
    <div className='w-screen h-screen flex justify-center items-center bg-primary'>
      <div className='bg-secondary w-96 h-96 rounded-lg flex flex-col justify-around items-center'>
        <div className='text-center flex flex-col items-center justify-center'>
          <img src="/logo.png" alt="Logo" width={180} height={180}/>
          <h1 className='text-2xl font-extrabold text-primary'>e-Fruit</h1>
          <h2 className='text-xl font-bold text-primary italic'>Mais saudável cada dia</h2>
        </div>
        <button className='btn btn-primary btn-outline' onClick={handleLogin}><FcGoogle className='mr-3 text-xl'></FcGoogle>Login com google</button>
      </div>
   </div>
  );
};

export default Login;