// import React, { useState } from 'react'

// export const Login = () => {
//     const [data,setData] = useState[{
//         username:"",
//         password:""
//     }]
//     const handleChange=(e)=>{
//         console.log(e.target.name)
//         console.log(e.target.value)
//         setData({
//             ...data,[e.target.name]: e.target.value
//         })
//     }
//     const handleLogin=()=>{
//         console.log(data);
//     }
//   return (
//     <div className='login-container'>
//         <div className='login-wrapper'>
//             <h1>Login Form</h1>
//             <form>
//                 <div className='username'>
//                     <input
//                         type='email'
//                         placeholder='Username'
//                         name='username'
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className='username'>
//                     <input
//                         type='password'
//                         placeholder='Password'
//                         name='password'
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <button type='button' onClick={handleLogin}>Login</button>
//             </form>
//         </div>
//     </div>
//   )
// }
import React, { useState } from 'react';

export const Login = () => {
    const [data, setData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = () => {
        e.preventDefault();
        console.log(data);
        const validateLogin=(data)=>{
            console.log(data.username.length)
            console.log(data.passwordinga.length)
            if(data.username.length)
            {
                
            }
        }
    };

    return (
        <div className='login-container'>
            <div className='login-wrapper'>
                <h1>Login Form</h1>
                <form>
                    <div className='username'>
                        <input
                            type='email'
                            placeholder='Username'
                            name='username'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='password'>
                        <input
                            type='password'
                            placeholder='Password'
                            name='password'
                            onChange={handleChange}
                        />
                    </div>
                    <button type="button" onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    );
};
