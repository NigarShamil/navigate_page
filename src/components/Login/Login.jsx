import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (password !== confirmPassword) {
            setErrors('Password and confirm password must match');
            setIsSubmitting(false);
            return;
        }

        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setIsSubmitting(false);
        })
    }

    return (
        <div className='form_field'>
            <form onSubmit={handleSubmit}>
                {errors.length > 0 && (
                    <ul>
                        {errors.map((error) => (
                            <li key={error} style={{ color: "red", }}>
                                {error}
                            </li>
                        ))}
                    </ul>
                )}
                 <h2>Login</h2>
                <input value={email} type='email' placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />
                <input value={password} type='password' placeholder='Password' required onChange={(e) => setPassword(e.target.value)} />
                <input value={confirmPassword} type='password' placeholder='Confrim Password' required onChange={(e) => setConfirmPassword(e.target.value)} />
                <button type='submit' disabled={isSubmitting}>Submit</button>
            </form>
        </div>
    )
}

export default Login