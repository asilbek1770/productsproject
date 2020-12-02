import React, {Component} from 'react';
import {Link} from "react-router-dom";
import FormGroup from "./LogInUtils/FormGroup";
import Joi from"joi-browser"
import "./LogInUtils/login.css"
import {login} from "./services/AuthServices";

class LogIn extends Component {
    state = {
        account: {
            username: "",
            password: ""
        },
        errors: {}
    };

    scheme = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password"),
    }
    validation = () => {
        // Joi yordamida validatsiya
        let result = Joi.validate(this.state.account, this.scheme, {
            abortEarly: false
        })
        if(!result.error) return null;
        const errors = {};
        result.error.details.forEach((err) => (errors[err.path[0]] = err.message) )
        return errors


        // Joi ishlatmay validatsiya qilish

        // let errors = {}
        // const {account} = this.state;
        //
        // if(account.username.trim() === ""){
        //     errors.username = "username is required !"
        // }if(account.password.trim() === ""){
        //     errors.password = "password is required !"
        // }
        //
        // return Object.keys(errors).length === 0 ? null : errors
    }
    validProperty = ({ name, value}) => {

        if(name === "username")
            if(value.trim() === "") return "username is required !"
        if(name === "password")
            if(value.trim() === "") return "password is required !"

        return null
    }
    handleChange = ({currentTarget: input}) => {

        let errors = {...this.state.errors}
        let errorMessage = this.validProperty(input)
        if(errorMessage)
            errors[input.name] = errorMessage
        else
            errors[input.name] = null     // 1)
            // delete errors[input.name]  // 2)


        const account = {...this.state.account}
        account[input.name] = input.value
        this.setState({ account,errors })
    }


    doSubmit = async () => {
        try{
            const {username, password } = this.state.account
            await login(username,password)
            window.location="/products"
        }catch (error){
            if(error.response && error.response.status === 400){
                const errors = {...this.state.errors }
                errors.username = error.response.data
                this.setState({ errors })
            }
        }
    }



    handleSubmit = (e) => {
        e.preventDefault();
        let errors = this.validation();
        this.setState({errors: errors ?? {}})
        if(errors) return ;
        this.doSubmit()
    }


    render() {
        const { account,errors } = this.state
        return (
            <section>
                <div className="row">
                    <div className="col-md-6 offset-md-3 my-1">
                        <h4 className="mb-4 text-center">Log In</h4>
                        <form onSubmit={this.handleSubmit}>
                                <FormGroup
                                    name="username"
                                    label="Username"
                                    value={account.username}
                                    onChange={this.handleChange}
                                    type="text"
                                    error={errors.username}
                                />
                                <FormGroup
                                    name="password"
                                    label="Password"
                                    value={account.password}
                                    onChange={this.handleChange}
                                    type="password"
                                    error={errors.password}

                                />
                            <button type="submit" className="btn btn-danger btn-sm mx-4">LogIn</button>
                            <Link to={"/logIn/signUp"} className="signIn-logIn-btn"
                                style={{color: "grey",textDecoration: "none"}}
                            >SignUp ?</Link>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}
export default LogIn;