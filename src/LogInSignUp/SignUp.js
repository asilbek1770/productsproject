import React, {Component} from 'react';
import {Link} from "react-router-dom";
import FormGroup from "./LogInUtils/FormGroup";
import {loginWithToken,signUp} from "./services/AuthServices"
class SignUp extends Component {
    state={
        account: {
            email: "",
            name: "",
            password: "",
            rewrite_password: ""
        },
        errors: {}
    };

    validation = () => {
        let errors = {}
        const {account} = this.state;
        if(account.email.trim() === "") { errors.email = "email is required !" }
        if(account.name.trim() === "") { errors.name = "username is required !" }
        if(account.password.trim() === "") { errors.password = "password is required !" }
        if(account.rewrite_password.trim() === "" ) { errors.rewrite_password = "rewrite_password is required !" }
        if(account.rewrite_password.trim() !== account.password.trim() ) { errors.rewrite_password = "rewrite_password is incorrect" }
        return Object.keys(errors).length === 0 ? null : errors;
    }

    validateProperty = (input) => {
        if(input.name === "email")
            if(input.value.trim() === "") return "email is required !"
        if(input.name === "name")
            if(input.value.trim() === "") return "name is required !"
        if(input.name === "password")
            if(input.value.trim() === "") return "password is required !"
        if(input.name === "rewrite_password")
            if(input.value.trim() === "") return "rewrite_password is required !"

        return null
    }

    handleChange = ({target: input}) => {
        let errors = {...this.state.errors }
        let errorMessage = this.validateProperty(input)
        if(errorMessage)
            errors[input.name] = errorMessage
        else  delete errors[input.name]

        const account = {...this.state.account}
        account[input.name] = input.value
        this.setState({ account })
    }


    doSubmit = async () => {
        try {
            const{ headers } = await signUp(this.state.account)
            loginWithToken(headers["x-auth-token"]);
            window.location="/logIn"
        }catch (error){
            console.log(error)
            if(error.response && error.response.status === 400){
                const errors = {...this.state.errors}
                errors.email = error.response.data;
                this.setState({errors})
            }
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        let errors = this.validation();
        this.setState({errors: errors ?? {}})
        if (errors) return;
        this.doSubmit()
    }


    componentDidMount() {

    }


    render() {
        const {account,errors} = this.state;
        return (
            <section>
                <div className="row">
                    <div className="col-md-6 offset-md-3 my-1">
                        <h4 className="mb-4 text-center">Sign Up</h4>
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup
                                name="email"
                                value={account.email}
                                onChange={this.handleChange}
                                label="Email"
                                type="text"
                                error={errors.email}
                            />
                            <FormGroup
                                name="name"
                                label="Name"
                                value={account.name}
                                onChange={this.handleChange}
                                type="text"
                                error={errors.name}
                            />
                            <FormGroup
                                name="password"
                                label="Password"
                                value={account.password}
                                onChange={this.handleChange}
                                type="password"
                                error={errors.password}
                            />
                            { account.password ?
                                <FormGroup
                                    name="rewrite_password"
                                    label="Rewrite_password"
                                    value={account.rewrite_password}
                                    onChange={this.handleChange}
                                    type="password"
                                    error={errors.rewrite_password}
                                />:
                                ""
                            }
                            <Link to={"/login"} type="submit" className=" mx-4 signIn-logIn-btn"
                                  style={{color: "grey",textDecoration: "none"}}
                            >back-to-LogIn ?</Link>
                            <button type="submit" className="btn btn-danger btn-sm ">SignUp</button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default SignUp;