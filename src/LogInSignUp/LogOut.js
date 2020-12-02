import { Component } from "react";
export default class LogOut extends Component {
    componentDidMount() {
        localStorage.removeItem("token")
        window.location = "/logIn";
    }
    render() {
        return null;
    }
}
