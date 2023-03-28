import React from "react";
import "./defaul-login.css";
import ShowEror from "./eror";


export default class DefaulLogin extends React.Component {
    state = {
        email: "",
        password: "",
        errors: [],
    }

    hendelFrom = (e) => {
        e.preventDefault();
        const { email, password } = this.state

        let message = []

        if (email.length === 0) {
            message = [...message, `email tidak bole kosong`]
        }
        if (password.length === 0) {
            message = [...message, `pasword tidak bole kosong`]
        }
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(email).toLowerCase())) (
            message = [...message, "email tidak valid"]
        )

        if (password.length < 8) {
            message = [...message, "password minimal 8 karakter"]
        }


        if (message.length > 0) {
            this.setState({ errors: message })
        }
    }

    render() {
        return (
            <div className="Form">
                <h1>Login</h1>
                {
                    this.state.errors && <ShowEror errors={this.state.errors} />
                }
                <form onSubmit={this.hendelFrom}>
                    <label>
                        Email <br />
                        <input type="email" name="email" label="Email" placeholder="Email"
                            onChange={(e) => this.setState({ email: e.target.value }, () => console.log(this.state.email))} />
                    </label><br />
                    <label>
                        Password <br />
                        <input type="password" name="password" label="password" placeholder="Password"
                            onChange={(e) => this.setState({ password: e.target.value }, () => console.log(this.state.password))} />
                    </label><br />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}