import React, {Component} from 'react';
import image1 from "../services/download.jpg"
import image2 from "../services/shervachcha.JPG"
const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
class Card extends Component {
    state = {
        number: 0,
        selectedImg: ""
    }
    handleClick = (img) => {
        setInterval(() => {
            this.setState({number: this.state.number + 1} )
        }, 1000)
        this.setState({selectedImg: img, number: 0})
    }
    render() {
        return (
            <section className="mt-5">
                <div className="row pt-2 ml-3">
                    {numbers.map(i =>
                        <div key={i}
                            className="col-2 my-2 p-2">
                            <div
                                onClick={() => this.handleClick(i)}
                                className="card p-2 " style={{cursor: "pointer",
                                // transform: "rotateY(180deg)"
                            }}>
                                <img
                                    src={ ( this.state.number < 5 &&
                                           this.state.selectedImg === i )
                                    ? image2 : image1 }
                                    height={200}
                                    style={{
                                        borderRadius: 5}}
                                />
                            </div>
                        </div>
                    )}
                </div>

            </section>
        );
    }
}
export default Card;