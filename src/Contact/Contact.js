import React, {Component} from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }



    handleSubmit(event) {
        if(this.state.value === '' ){
            alert("You didn't entered email !!");
        }else{
            alert("Ok!  We will send  reply to your email !! ")
        }
        event.preventDefault();
    }

    correctEmail(){
        if (this.state.value===""){
            return(
                <small id="emailHelp" className="form-text text-muted ">
                    {this.state.value}
                </small>
            )
        }
        if (this.state.value.includes("@") && this.state.value.includes(".com")){
            return(
                <small id="emailHelp" className="form-text text-muted ">
                    {this.state.value}
                </small>
            )
        }else{
            return(
                <small id="emailHelp" className=" " style={{color: "red"}}>
                    this text isn't email
                </small>
            )
        }
    }

    render() {
        const valueInputEntered = this.state.value
        console.log(valueInputEntered)
        return (
            <section>
                <h4 className="text-center">Contact</h4>
                <form onSubmit={this.handleSubmit} action="" className="w-50 p-5"     style={{boxShadow: '0 0 2px', marginLeft: 300}}>
                    <div className="form-group ">
                        <label htmlFor="exampleInputEmail1" className="">Email address</label>
                        <input
                            value={this.state.value}
                            onChange={this.handleChange}
                            type="email" className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            style={{color: this.state.value.includes("@")&&this.state.value.includes(".com") ? "green" : "red"}}
                        />
                         {this.correctEmail()}
                        <small id="emailHelp" className="form-text text-muted ">We'll never share your email with anyone
                        else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="">Description</label>
                        <textarea type="text" className="form-control  " id="exampleInputEmail1" aria-describedby="emailHelp"
                                  style={{color: "green"}} placeholder="Enter text" />
                    </div>
                    <button onClick={this.handleSubmit} className="btn btn-success" style={{float: "right"}}>Send</button>
                </form>
            </section>
        );
    }
}

export default Contact;
