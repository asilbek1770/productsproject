import React,{Component} from 'react';

class Counter  extends Component{

    // onIncrement = () => {
    //     this.setState({value: this.props.counter.value + 1});
    // }
    // onDecrement = () => {
    //     this.setState({value:this.props.counter.value - 1});
    // }

    number () {
            return this.props.counter.value === 0 ? "zero" : this.props.counter.value;
    }

    getBtnClass() {
        const { value } = this.props.counter;
        let classes = "btn  mx-5 mt-5 btn-";
        if(value === 0){ classes+="warning"; }
        else if(value > 0){ classes+="primary";}
        else classes+="danger";
        return classes;
    }


    render() {

        return (
            <div>
                <button className="btn btn-danger ml-5 mt-5" onClick={this.props.onDecrement}
                        disabled={this.props.counter.value === 0}>-</button>
                <button className={this.getBtnClass()}>{this.number()}</button>
                <button className="btn btn-success  mt-5" onClick={this.props.onIncrement}>+</button>
                <button className="btn btn-danger ml-5 mt-5" onClick={this.props.onDelete}>delete</button>
            </div>
        );
    }
}
export default Counter;
