import React, { useState } from  'react';


const UserForm = () => {
    const [username, setFName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    

    return (
        <div>
            <form className='Form' onSubmit={()=>{}}>
                <div className='field'>
                    <label>Username: </label>
                    <input type="text" name='username' onChange={(e) => setFName(e.target.value)} />
                </div>
                {username.length > 4 && username.length < 0 ?
                    <p>Username must be at least 4 characters</p> : null
                }
                <div className='field'>
                    <label>Email: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                {email.length > 6 && email.length < 0 ?
                    <p>Email must be at least 6 characters</p> : null
                }
                <div className='field'>
                    <label>Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} />
                </div>
                {password.length > 4 && password.length < 0 ?
                    <p>password must be at least 4 characters</p> : null
                }
                <div className='field'>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={(e) => setConfirmPass(e.target.value)} />
                </div>
                {confirmPass !== password && confirmPass.length < 0 ?
                    <p>Passwords do not match</p> : null
                }
                <input type="submit" value="Create" />
            </form>
        </div>
    );
};

export default UserForm;