import React, { useState } from 'react';
import {Link} from 'react-router-dom';
//package - index.ts
// import {z} from 'zod';
// export const signupInput=z.object({
//     username:z.string(),
//     password:z.string()
// })
// export type signupParams=z.infer<typeof signupInput>
// import {signupParams} from '';
const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [signupParams, setSignupParams]=useState<SignupParams>({username:'', password:''});
    const handleSignup = async () => {
        const response = await fetch('http://localhost:3000/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
            // body: JSON.stringify(signupParams)
        });
        const data = await response.json();
        if (data.token) {
            localStorage.setItem("token", data.token);
            (window as any).location = "/todos";
        } else {
            alert("Error while signing up");
        }
    };
    return (
        <div style={{justifyContent: "center", display: "flex", width: "100%"}}>
            <div>
                <h2>Signup</h2>
                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                {/* <input
                    type='text'
                    value={signupParams.username}
                    onChange={(e) => setSignupParams({ ...signupParams, username: e.target.value })}
                    placeholder='Username'
                />
                <input
                    type='password'
                    value={signupParams.password}
                    onChange={(e) => setSignupParams({ ...signupParams, password: e.target.value })}
                    placeholder='Password'
                /> */}
                Already signed up? <Link to="/login">Login</Link>
                <button onClick={handleSignup}>Signup</button>
            </div>
        </div>
    );
};
export default Signup;