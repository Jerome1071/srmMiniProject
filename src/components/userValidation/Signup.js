import React, { useState } from 'react';
import './Signup.css';
import { Box, TextField, Button, Typography } from '@mui/material';

const Signup = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [signInData, setSignInData] = useState({ email: '', password: '' });
    const [signUpData, setSignUpData] = useState({ firstName: '', lastName: '', email: '', password: '', phone: '' });
    const [signInErrors, setSignInErrors] = useState({ email: '', password: '', general: '' });
    const [signUpErrors, setSignUpErrors] = useState({ firstName: '', lastName: '', email: '', password: '', phone: '', general: '' });

    const toggleForm = (e) => {
        e.preventDefault();
        setIsSignUp(!isSignUp);
        setSignInErrors({ email: '', password: '', general: '' });
        setSignUpErrors({ firstName: '', lastName: '', email: '', password: '', phone: '', general: '' });
    };

    const validateEmail = (email) => email.toLowerCase().endsWith('@gmail.com');

    const handleSignInSubmit = () => {
        const errors = { email: '', password: '', general: '' };
        if (!signInData.email || !signInData.password) {
            errors.general = 'Please fill all the fields';
        }
        if (signInData.email && !validateEmail(signInData.email)) {
            errors.email = 'Email must end with @gmail.com';
        }
        if (errors.general || errors.email) {
            setSignInErrors(errors);
            return;
        }
        console.log('Sign In Data:', signInData);
        setSignInData({ email: '', password: '' });
        setSignInErrors({ email: '', password: '', general: '' });
    };

    const handleSignUpSubmit = () => {
        const errors = { firstName: '', lastName: '', email: '', password: '', phone: '', general: '' };
        if (!signUpData.firstName || !signUpData.lastName || !signUpData.email || !signUpData.password || !signUpData.phone) {
            errors.general = 'Please fill all the fields';
        }
        if (signUpData.email && !validateEmail(signUpData.email)) {
            errors.email = 'Email must end with @gmail.com';
        }
        if (errors.general || errors.email) {
            setSignUpErrors(errors);
            return;
        }
        console.log('Sign Up Data:', signUpData);
        setSignUpData({ firstName: '', lastName: '', email: '', password: '', phone: '' });
        setSignUpErrors({ firstName: '', lastName: '', email: '', password: '', phone: '', general: '' });
    };

    return (
        <Box className="container">
            <div className={`form-container ${isSignUp ? 'sign-up-mode' : ''}`}>
                <div className={`signin ${isSignUp ? 'hidden' : ''}`}>
                    <div className="card" style={{ padding: '20px', gap: '10px', marginTop: '25%' }}>
                        <Typography variant="h6" align="center" sx={{ fontFamily: 'poppins-semibold !important' }}>
                            Sign In
                        </Typography>
                        <TextField
                            label="Email"
                            id="outlined-size-small-email-signin"
                            value={signInData.email}
                            onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                            sx={{ marginBottom: '10px', width: '300px' }}
                            variant="outlined"
                            error={!!signInErrors.email || !!signInErrors.general}
                            helperText={signInErrors.email || signInErrors.general}
                        />
                        <TextField
                            label="Password"
                            id="outlined-size-small-password-signin"
                            type="password"
                            value={signInData.password}
                            onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                            sx={{ marginBottom: '10px', width: '300px' }}
                            variant="outlined"
                            error={!!signInErrors.general}
                            helperText={signInErrors.general}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ marginBottom: '10px', width: '300px' }}
                            onClick={handleSignInSubmit}
                        >
                            Sign In
                        </Button>
                        <Typography align="center">
                            Don't have an account?{' '}
                            <a href="#" onClick={toggleForm} className="toggle-link">
                                Sign Up
                            </a>
                        </Typography>
                    </div>
                </div>
                <div className={`signup ${isSignUp ? '' : 'hidden'}`}>
                    <div className="card">
                        <Typography variant="h6" align="center" sx={{ fontFamily: 'poppins-semibold !important' }}>
                            Sign Up
                        </Typography>
                        <TextField
                            label="First Name"
                            id="outlined-size-small-firstname"
                            value={signUpData.firstName}
                            onChange={(e) => setSignUpData({ ...signUpData, firstName: e.target.value })}
                            sx={{ marginBottom: '10px', width: '300px' }}
                            variant="outlined"
                            error={!!signUpErrors.general}
                            helperText={signUpErrors.general}
                        />
                        <TextField
                            label="Last Name"
                            id="outlined-size-small-lastname"
                            value={signUpData.lastName}
                            onChange={(e) => setSignUpData({ ...signUpData, lastName: e.target.value })}
                            sx={{ marginBottom: '10px', width: '300px' }}
                            variant="outlined"
                            error={!!signUpErrors.general}
                            helperText={signUpErrors.general}
                        />
                        <TextField
                            label="Email"
                            id="outlined-size-small-email-signup"
                            value={signUpData.email}
                            onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                            sx={{ marginBottom: '10px', width: '300px' }}
                            variant="outlined"
                            error={!!signUpErrors.email || !!signUpErrors.general}
                            helperText={signUpErrors.email || signUpErrors.general}
                        />
                        <TextField
                            label="Password"
                            id="outlined-size-small-password-signup"
                            type="password"
                            value={signUpData.password}
                            onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                            sx={{ marginBottom: '10px', width: '300px' }}
                            variant="outlined"
                            error={!!signUpErrors.general}
                            helperText={signUpErrors.general}
                        />
                        <TextField
                            label="Phone Number"
                            id="outlined-size-small-phone"
                            value={signUpData.phone}
                            onChange={(e) => setSignUpData({ ...signUpData, phone: e.target.value })}
                            sx={{ marginBottom: '10px', width: '300px' }}
                            variant="outlined"
                            error={!!signUpErrors.general}
                            helperText={signUpErrors.general}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ marginBottom: '10px', width: '300px' }}
                            onClick={handleSignUpSubmit}
                        >
                            Sign Up
                        </Button>
                        <Typography align="center">
                            Already have an account?{' '}
                            <a href="#" onClick={toggleForm} className="toggle-link">
                                Sign In
                            </a>
                        </Typography>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default Signup;