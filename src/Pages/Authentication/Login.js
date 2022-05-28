import React from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import './Login.css';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../src/firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const { register, formState: { errors }, handleSubmit } = useForm();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  let signInError;

  if (loading || gLoading) {
    return <Loading></Loading>
  }

  if (error || gError) {
    signInError = <p className='text-danger mt-3'> {error?.message || gError?.message} </p>
  }

  if (user || gUser) {
    navigate(from, { replace: true });
  }

  const onSubmit = data => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  }

  return (
    <div className='login-container'>
      <Card style={{ width: '18rem' }} className='mx-auto my-5'>
        <Card.Body>
          <Card.Title className='text-center'>Log In</Card.Title>

          <form onSubmit={handleSubmit(onSubmit)}>

            <div class="mb-3">
              <input type="email" name='email' class="form-control" placeholder='Email' aria-describedby="emailHelp" {...register("email", {
                required: {
                  value: true,
                  message: 'Email is required'
                },
                pattern: {
                  value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                  message: 'Provide a valid email'
                }
              })} />
              <div>
                {errors.email?.type === 'required' && <span className='text-danger'>
                  {
                    errors.email.message
                  }
                </span>}
                {errors.email?.type === 'pattern' && <span className='text-danger'>
                  {
                    errors.email.message
                  }
                </span>}
              </div>
            </div>

            <div class="mb-3">
              <input type="password" name='password' class="form-control" placeholder='Password' aria-describedby="emailHelp" {...register("password", {
                required: {
                  value: true,
                  message: 'Password is required'
                },
                minLength: {
                  value: 6,
                  message: 'Must be 6 characters or longer'
                }
              })} />
              <div>
                {errors.password?.type === 'required' && <span className='text-danger'>
                  {
                    errors.password.message
                  }
                </span>}
                {errors.password?.type === 'minLength' && <span className='text-danger'>
                  {
                    errors.password.message
                  }
                </span>}
              </div>
            </div>
            {signInError}
            <input type="submit" className='authentication-btn' value="Login" variant="outline-secondary" />
          </form>

          <small> <p className='mt-4'> Don't have an account? <Link className='text-primary text-decoration-none' to="/signUp"> Sign Up </Link> </p> </small>


          <div className='orDivider'>
            <div className="dividerLeft"></div>
            <p className='orText'>OR</p>
            <div className="dividerRight"></div>
          </div>
          <button type="button" onClick={() => signInWithGoogle()} class="continueWithGoogleBtn">Continue with Google</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;