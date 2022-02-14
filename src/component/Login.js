import React from 'react'


export const Login = () => {
    const sendData = () => {}
    const handleInputChange = () => {}
    return (
        <div>
            
            <br></br>
            <br></br>
            <form onSubmit={sendData} className="login-form">
            <input
                type="text"
                name="userName"
                label="User"
                required
                className="form-control"
                style={{ marginBottom: "30px" }}
                onChange={handleInputChange}
                InputLabelProps={{
                    shrink: true,
                }}
                autoFocus
            /><br />

            <input
                type="password"
                name="userPwd"
                label="Contraseña"
                required
                className="form-control"
                onChange={handleInputChange}
                InputLabelProps={{
                    shrink: true,
                }}
            /><br /><br />
            
            <button type="submit" style={{ width: "100%" }} className="btn btn-primary">SignIn</button>
        </form>
        </div>
        

    )
}
