import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
// import { selectAllInlineText } from 'utilities/contentEditable';
// import { FaGoogle } from 'react-icons/fa';
import { useStateContext } from '../contexts/ContextProvider';
// import { GoogleLogin } from 'react-google-login';
import Camera from './Camera';
import './Auth.scss';


// const initialState = { name: '', username: '', password: '', confirmPassword: '' };

const Auth = ({ user, setUser }) => {
  const { setRole } = useStateContext();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isSignUp, setIsSignUp] = useState(false);

  const handleFormNameChange = (e) => setName(e.target.value);
  const handleFormUsernameChange = (e) => setUsername(e.target.value);
  const handleFormPasswordChange = (e) => setPassword(e.target.value);

  const switchSignUp = () => {
    setIsSignUp(!isSignUp);
  };
  
  if (user === true) {
    setUser(false);
  }
  const handleSubmitForm = (e) => {
    
    e.preventDefault();
    console.log('username', username);
    if (username === 'admin@gmail.com') {
      setRole('manager');
    } else {
      setRole('managerEmployee');
    }
    setUser(true);
    // navigate('/test');
  };

  const handleSubmitCamera = (e) => {
    
    setRole('employee');
    setUser(true);
    // navigate('/test2');
  };

  // const googleSuccess = async (res) => {
  //   // const result = res?.profileObj;
  //   // const token = res?.tokenId;

  //   try {
  //     // dispatch({ type: AUTH, data: { result, token } });
  //     console.log('Success');
  //     console.log(res);
  //     // history.push('/');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const googleError = () => console.log('Google Sign In was unsuccessful. Try again later');

  return (
    <section className="h-100 gradient-form auth" style={{ backgroundColor: '#eee' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" style={{ width: '185px' }} alt="logo" />
                      <h4 className="mt-1 mb-5 pb-1">Welcome</h4>
                    </div>
                    <form onSubmit={handleSubmitForm}>
                      <Camera submit={handleSubmitCamera} />
                      <p>Please enter to your account</p>

                      { isSignUp
                        && (
                        <div className="form-outline mb-4">
                          <Form.Control
                            className="form-control"
                            size="md"
                            type="text"
                            placeholder="Your name"
                            style={{ border: 0 }}
                            value={name}
                            // spellCheck="false"
                            // onClick={selectAllInlineText}
                            onChange={handleFormNameChange}
                          />
                          {/* <label className="form-label" htmlFor="form2Example11">Your name</label> */}
                          <div className="form-notch"><div className="form-notch-leading" style={{ width: '9px' }} /><div className="form-notch-middle" style={{ width: '64.8px' }} /><div className="form-notch-trailing" /></div>
                        </div>
                        )}

                      <div className="form-outline mb-4">
                        <Form.Control
                          className="form-control"
                          size="md"
                          type="email"
                          placeholder="Email address"
                          style={{ border: 0 }}
                          value={username}
                          // spellCheck="false"
                          // onClick={selectAllInlineText}
                          onChange={handleFormUsernameChange}
                          // onBlur={handleFormTitleBlur}
                          // onMouseDown={e => e.preventDefault()}
                          // onKeyDown={saveContentAfterPressEnter}
                        />
                        {/* <label className="form-label" htmlFor="form2Example11">Username</label> */}
                        <div className="form-label" htmlFor="form2Example11">Username</div>

                        <div className="form-notch"><div className="form-notch-leading" style={{ width: '9px' }} /><div className="form-notch-middle" style={{ width: '64.8px' }} /><div className="form-notch-trailing" /></div>
                      </div>
                      <div className="form-outline mb-4">
                        <Form.Control
                          className="form-control"
                          size="md"
                          type="password"
                          style={{ border: 0 }}
                          value={password}
                          // spellCheck="false"
                          // onClick={selectAllInlineText}
                          onChange={handleFormPasswordChange}
                          // onBlur={handleFormTitleBlur}
                          // onMouseDown={e => e.preventDefault()}
                          onKeyDown={(e) => (e.key === 'Enter' && handleSubmitForm)}
                        />
                        {/* <label className="form-label" htmlFor="form2Example22">Password</label> */}
                        <div className="form-label" htmlFor="form2Example22">Password</div>

                        <div className="form-notch"><div className="form-notch-leading" style={{ width: '9px' }} /><div className="form-notch-middle" style={{ width: '64.8px' }} /><div className="form-notch-trailing" /></div>

                      </div>
                      <div className="text-center pt-1 mb-5 pb-1">
                        <Button className="btn  btn-block  gradient-custom-2 mb-3" type="submit" size="md" onClick={null}>Log in</Button>

                        {/* <GoogleLogin
                          clientId="810349711486-vsa36hqu6sfu2re4oc1vgq10830k6k1f.apps.googleusercontent.com"
                          render={(renderProps) => (
                            <Button className="btn  btn-block  gradient-custom-2 mb-3" onClick={renderProps.onClick} disabled={renderProps.disabled} variant="contained">
                              <FaGoogle size={20} />
                              oogle Log In
                            </Button>
                          )}
                          onSuccess={googleSuccess}
                          onFailure={googleError}
                          cookiePolicy="single_host_origin"
                        /> */}
                        <a className="text-muted mb-3" href="#!">Forgot password?</a>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Do not have an account?</p>
                        {/* <button type="button" className="btn btn-outline-danger">Create new</button> */}
                        <Button className="btn" size="md" onClick={switchSignUp}>{isSignUp ? 'Log in' : 'Sign up'}</Button>

                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
