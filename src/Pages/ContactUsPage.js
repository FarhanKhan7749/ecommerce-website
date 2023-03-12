import React, { useCallback, useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);
  const [apiError, setApiError] = useState(null);
  const sendContactFormData = useCallback(async (requestObject) => {
    try {
      const response = await fetch("https://ecommerce-website-server-default-rtdb.firebaseio.com/request.json", {
        method: 'POST',
        body: JSON.stringify(requestObject),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Something went wrong....Retrying');
      }
      const data = await response.json();
      console.log(data);
    }
    catch (error) {
      const errorMessage = error.message;
      setApiError(errorMessage);
    }
  },[]);

  const requestObject = {
    name: name,
    email: email,
    phone: phone,
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length === 0 || email.trim().length === 0 || phone.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    // TODO: perform POST request to store data in Firebase
    //console.log(requestObject);
    sendContactFormData(requestObject);
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <>
      {error && <Alert className='mt-5' variant="danger" onClose={() => setError(null)} dismissible>
        <Alert.Heading>{error.title}</Alert.Heading>
        <p>
          {error.message}
        </p>
      </Alert>}
      {apiError && <Alert className='mt-5' variant="danger" onClose={() => setApiError(null)} dismissible>
        <Alert.Heading>Something Went Wrong</Alert.Heading>
        <p>
          {apiError}
        </p>
      </Alert>}
      <Container className="mt-5 p-5 justify-content-center align-items-center border rounded" style={{ fontFamily: "Times New Roman" }}>
        <h1 className="p-2 text-center">CONTACT US</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="text" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </Form.Group>

          <Button className='col-md-12 text-center' variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default ContactUs;