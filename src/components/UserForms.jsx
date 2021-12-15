import React, { useState } from  'react';


const UserForm = () => {
    const [firstName, setFName] = useState("");
    const [lastName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    

    return (
        <div>
            <form className='Form' onSubmit={()=>{}}>
                <div className='field'>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setFName(e.target.value)} />
                </div>
                {firstName.length < 2 && firstName.length > 0 ?
                    <p>First name must be at least 2 characters</p> : null
                }
                <div className='field'>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLName(e.target.value)} />
                </div>
                {lastName.length < 2 && lastName.length > 0 ?
                    <p>Last name must be at least 2 characters</p> : null
                }
                <div className='field'>
                    <label>Email: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                {email.length < 5 && email.length > 0 ?
                    <p>Email must be at least 5 characters</p> : null
                }
                <div className='field'>
                    <label>Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} />
                </div>
                {password.length < 8 && password.length > 0 ?
                    <p>Password must be at least 8 characters</p> : null
                }
                <div className='field'>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={(e) => setConfirmPass(e.target.value)} />
                </div>
                {confirmPass !== password && confirmPass.length > 0 ?
                    <p>Passwords do not match</p> : null
                }
                <input type="submit" value="Create" />
            </form>
        </div>
    );
};

export default UserForm;