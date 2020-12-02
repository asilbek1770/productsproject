import React from 'react';
import Counter from "./Counter";

 const Counters = (props) => {
        return (
            <>
                <button
                    className="btn btn-warning mt-5 ml-5"
                    onClick={props.onReset}
                >reset
                </button>
                { props.counters.length === 0 ? <button className="btn btn-warning">refresh</button> : null }

                {props.counters.map(c =>
                    <Counter
                        key={c.id}
                        counter={c}
                        onDelete = {()=>props.onDelete(c)}
                        onIncrement={()=>props.onIncrement(c)}
                        onDecrement={()=>props.onDecrement(c)}
                    />
                )}
            </>
        );
}
export default Counters;