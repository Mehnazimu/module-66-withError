import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
    }
    return (
        <div className="hero w-full">
            <div className="hero-content gap-10 grid md:grid-cols-2 flex-col lg:flex-row my-5">
                <div className="w-3/4 text-center lg:text-left">
                    <img src={img} alt="" />

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-20">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-center text-5xl font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value='login' />

                        </div>
                    </form>
                    <p className='text-center'>New to Genious Car? <Link className='text-orange-600 font-bold' to="/signup">Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;