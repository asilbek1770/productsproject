import React,{Component} from 'react';
import Counters from "./Counters";
import Navbar from "./Navbar";

class CounterApp  extends Component{
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0}
        ]
    }
    handleDelete=(count)=>{
        const counters = this.state.counters.filter((c) => c.id !== count.id )
        this.setState({ counters })
    }

    handleReset=()=>{
        const counters = this.state.counters.map((c)=>({
            ...c,
            value: 0
        }));
        this.setState({counters})
    }

    handleIncrement=(counter)=>{
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });

    }

    handleRefresh=()=>{
        const counters = [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0}
        ]
        this.setState({counters: this.state.counters})
    }

    handleDecrement=(counter)=>{
        console.log(counter)
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value--;
        this.setState({ counters });
    }
    render() {
        return (
            <>
                {/*< Movies />*/}
                <Navbar
                    numberOfDifferentZero={this.state.counters.filter(c => c.value > 0).length}
                />
                <Counters
                    counters={this.state.counters}
                    onReset = {this.handleReset}
                    onDelete = {this.handleDelete}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onRefresh = {this.handleRefresh}
                />
            </>
        );
    }
}
export default CounterApp;
