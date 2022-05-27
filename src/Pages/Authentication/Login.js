import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Login.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../src/firebase.init';
import { useForm } from "react-hook-form";


const Login = () => {

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const { register, formState: { errors }, handleSubmit } = useForm();

  if (user) {
    console.log(user);
  }

  const onSubmit = data => {
    console.log(data);
  }

  return (
    <div>
      <Card style={{ width: '18rem' }} className='mx-auto my-5 text-center'>
        <Card.Body>
          <Card.Title className='text-center'>Log In</Card.Title>

          <form onSubmit={handleSubmit(onSubmit)}>


            <div class="mb-3">
              <input type="email" class="form-control" placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp" {...register("firstName", { required: true })} />
            </div>



            <input {...register("firstName", { required: true })} />
            {errors.firstName?.type === 'required' && "First name is required"}

            <input {...register("lastName", { required: true })} />
            {errors.lastName && "Last name is required"}

            <input type="submit" />
          </form>



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