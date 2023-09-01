import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import '../styles/main.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        navigate('/dashboard');
      }, 3000);
    }
  }, [loggedIn, navigate]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPasswordForm(true);
    setErrorMessage('');
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };

  const handleCloseResetPasswordModal = () => {
    setShowResetPasswordModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'dummy@gmail.com' && password === 'password') {
      setLoggedIn(true);
      setErrorMessage('');
    } else {
      setLoggedIn(false);
      setErrorMessage('Incorrect email or password');
      setShowErrorModal(true);
    }
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    setShowForgotPasswordForm(false);

    const registeredUsers = ['dummy@gmail.com', 'user@example.com'];
    if (registeredUsers.includes(email)) {
      setErrorMessage('A password reset email has been sent to your email address.');
      setShowResetPasswordModal(true);
    } else {
      setErrorMessage("E-mail does not exist in our database.");
      setShowErrorModal(true);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={showForgotPasswordForm ? handleForgotPasswordSubmit : handleSubmit} className="login-form">
        {showForgotPasswordForm ? (
          <div>
            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
            <button type="submit">Reset Password</button>
          </div>
        ) : (
          <div>
            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            <br />
            <br />
            <button type="submit">Log In</button>
            <br />
            <br />
            <p onClick={handleForgotPasswordClick} className="forgot-password-link">
              Forgot Password?
            </p>
          </div>
        )}
      </form>
      <Modal className="modaldes" show={showErrorModal} onHide={handleCloseErrorModal}>
        <Modal.Header>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{errorMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseErrorModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal className="modaldes" show={showResetPasswordModal} onHide={handleCloseResetPasswordModal}>
        <Modal.Header>
          <Modal.Title>Password Reset</Modal.Title>
        </Modal.Header>
        <Modal.Body>{errorMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseResetPasswordModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {loading && (
        <div className="loader-effect">
          <div className="loader" />
        </div>
      )}
    </div>
  );
};

export default Login;


