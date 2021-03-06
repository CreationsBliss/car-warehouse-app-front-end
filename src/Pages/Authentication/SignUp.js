import React from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import './Login.css';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../src/firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const { register, formState: { errors }, handleSubmit } = useForm();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  let signInError;

  if (loading || gLoading || updating) {
    return <Loading></Loading>
  }

  if (error || gError || updateError) {
    signInError = <p className='text-danger mt-3'> {error?.message || gError?.message || updateError?.message} </p>
  }

  if (user || gUser) {
    console.log(user || gUser);
  }

  const onSubmit = async data => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log("Update done");
    navigate('/');
  }

  return (
    <div className='login-container'>
      <Card style={{ width: '18rem' }} className='mx-auto my-5'>
        <Card.Body>
          <Card.Title className='text-center'>Sign Up</Card.Title>

          <form onSubmit={handleSubmit(onSubmit)}>

            <div class="mb-3">
              <input type="text" name='name' class="form-control" placeholder='Name' aria-describedby="emailHelp" {...register("name", {
                required: {
                  value: true,
                  message: 'Name is required'
                }
              })} />
              <div>
                {errors.name?.type === 'required' && <span className='text-danger'>
                  {
                    errors.name.message
                  }
                </span>}
              </div>
            </div>

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
            <input type="submit" className='authentication-btn' value="Signup" variant="outline-secondary" />
          </form>

          <small> <p className='mt-4'> Have an account? <Link className='text-primary text-decoration-none' to="/signIn"> Log In </Link> </p> </small>


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

export default SignUp;