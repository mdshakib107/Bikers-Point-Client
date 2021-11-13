import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
const SingIn = () => {
    const { setIsLoading, singInWithGoogle, user, singInWithEmailPassword, setError, handaleEmail, handalePassword, error } = useAuth();
    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'
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
    const handaleEmailSingIn = e => {
        e.preventDefault();
        singInWithEmailPassword()
            .then((result) => {
                setIsLoading(true)
                history.push(redirect_uri)
                setError('');

            })
            .catch(error => {
                setError(error.message);
                console.log(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <div>
            {user.email ?
                <h1 className="container d-flex justify-content-center p-5 ">Welcome: <br /> {user.displayName}</h1>
                :
                <div className="row row-col-12 row-col-md-6 container d-flex justify-content-center ">
                    <div className="col p-5">
                        <img src="./image/login.png" alt="" />
                    </div>
                    <div className="container text-start p-5 col ">
                        <h1>Sing In</h1>
                        <p>Log up or log  in to access your orders, special offers, health tips and more!</p>
                        <Form onSubmit={handaleEmailSingIn}>
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
                                SingIn
                            </Button>
                        </Form>
                        <p>New to Biker's Point? <Link to="/singUp"> Create Account </Link> </p>
                        ------------------------or------------------------
                        <br />

                        <Button variant="primary" type="submit" onClick={handaleGoogleLogin} >
                            Log In with Google
                        </Button>
                    </div>
                </div>}
        </div>
    );
};

export default SingIn;