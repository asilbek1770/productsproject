import React,{Component} from 'react';

 class Navbar  extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light mx-5 mt-2">
                <a className="" href="#">CountOfDifferentZero
                    <button className="btn btn-primary ml-4">
                        {this.props.numberOfDifferentZero}
                    </button>
                </a>
            </nav>
        );
    }
}
export default Navbar