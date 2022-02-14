import axios from 'axios';
import React, { useState } from 'react'



export const SignUp = () => {

    const [data, setData] = useState([]);


    const sendData = (e) => {
        e.preventDefault()
        axios.post("https://localhost:44309/api/Users", {
            userName: data.userName,
            userEmail: data.userEmail,
            userPwd: data.userPwd
        })
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        //console.log(data)
    }

    /* const sendData = (e) => {
        e.preventDefault()
        axios.post('https://localhost:44309/api/Users', {
            id: 6,
            userName: 'six',
            userEmail: 'six@hotmail.com',
            userPwd: '123'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        //console.log(data)
    } */

    const handleInputChange = (e) => {

        setData({
            ...data,
            [e.target.name]: e.target.value
        })

    }

    return (
        <div>

            <br></br>
            <br></br>
            <form onSubmit={sendData} className="SignUps">
                <label>User Name</label>
                <input
                    type="text"
                    name="userName"
                    label="User"
                    required
                    className="form-control"
                    style={{ marginBottom: "30px" }}
                    onChange={handleInputChange}
                    inputlabelprops={{
                        shrink: true,
                    }}
                    autoFocus
                />
                <br />

                <label>User Email</label>
                <input
                    type="email"
                    name="userEmail"
                    label="E-mail"
                    required
                    className="form-control"
                    onChange={handleInputChange}
                    inputlabelprops={{
                        shrink: true,
                    }}
                />
                <br /><br />
                <label>User Password</label>
                <input
                    type="password"
                    name="userPwd"
                    label="Contraseña"
                    required
                    className="form-control"
                    onChange={handleInputChange}
                    inputlabelprops={{
                        shrink: true,
                    }}
                />
                <br /><br />

                <button type="submit" style={{ width: "100%" }} className="btn btn-primary">SignUp</button>
            </form>
        </div>
    )
}
