import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const SingUp = () => {
    const { name, updateName, password, user, error, singInWithGoogle, handaleEmail, handalePassword, singUpWithEmailPassword, handleNameChange, setUserName, setError, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'
    console.log(redirect_uri)
    const handaleGoogleLogin = () => {
        singInWithGoogle()
            .then(result => {
                setIsLoading(true)
                history.push(redirect_uri)

            })
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    }
    const handaleEmailSingUp = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Must Be 6 Charecter')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }
        singUpWithEmailPassword()
            .then((result) => {
                setIsLoading(true)
                updateName(name)
                history.push(redirect_uri)
                setError('');
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false)
            })

    }
    return (
        <div>
            {user.email ?
                <h1 className="container d-flex justify-content-center p-5 text-start ">Welcome:<br />{user.displayName}<br />email: {user.email} </h1>
                :
                <div className="container d-flex justify-content-center ">
                    <div className="p-5">
                        <img src="./image/login.png" alt="" />
                    </div>
                    <div className="container text-start p-5 ">
                        <h1>Sing Up</h1>
                        <p>Sign up or Sign in to access your orders, special offers, health tips and more!</p>
                        <Form onSubmit={handaleEmailSingUp} >
                            <Form.Group className="mb-3 w-75" controlId="formBasicText">
                                <Form.Label>User Name </Form.Label>
                                <Form.Control onBlur={handleNameChange} type="text" placeholder="Enter your name" required />
                                <Form.Text className="text-muted">
                                    Use your real name
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onBlur={handaleEmail} type="email" placeholder="Enter email" required />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3 w-75" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={handalePassword} type="password" placeholder="Password" required />
                            </Form.Group>
                            <div className="row mb-3 text-danger">{error}</div>
                            <Button variant="primary" type="submit">
                                Sing In
                            </Button>
                        </Form>
                        <p>Alredy have Account? <Link to="/singin "> Go to Log In</Link> </p>
                        ------------------------or------------------------
                        <br />

                        <Button variant="primary" type="submit" onClick={handaleGoogleLogin}>
                            Sing In with Google
                        </Button>
                    </div>
                </div>}
        </div>
    );
};

export default SingUp;