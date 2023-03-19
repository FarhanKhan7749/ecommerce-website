import { useState, useRef, useContext} from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import AuthContext from "../store/auth-context";

const AuthForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const formRef = useRef();
    const authCtx = useContext(AuthContext);

    const submitHnadler = async (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        // add validation

        //
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD-MVZV20Q_pw4JIthVCDIfEkUOUYiGXoA';

        setIsLoading(true);
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setIsLoading(false);
            if (response.ok) {
                const data = await response.json();
                authCtx.login(data.idToken, enteredEmail);
                history.replace('/store');
            } else {
                let errorMessage = 'Authentication failed!';
                throw new Error(errorMessage);
            }
            //console.log(enteredEmail,enteredPassward)
        } catch (error) {
            alert(error.message);
        }
        formRef.current.reset();
        //console.log(enteredEmail,enteredPassward)
    };
    return (
        <Container className="col-md-6 col-lg-6 mt-5 p-5 justify-content-center align-items-center border rounded" style={{ fontFamily: "Times New Roman" }}>
            <h1 className="text-center">Login</h1>
            <Form ref={formRef}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={emailInputRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={passwordInputRef} />
                </Form.Group>
                <Container className="text-center justify-content-center align-items-center">
                    {!isLoading && <Button onClick={submitHnadler} className="col-md-3 col-lg-6 p-2 m-1">Login</Button>}
                    {isLoading && <p>Sending request...</p>}
                </Container>
            </Form>
        </Container>
    );
}

export default AuthForm;