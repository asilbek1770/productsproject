import React from 'react';

function FormGroup(props) {
    const { name,label,value,onChange,type,error } = props;
    return (
        <div className="form-group">
            <label htmlFor="example">{label}</label>
            <input
                type={type}
                className="form-control"
                id="example"
                placeholder={`Enter ${name}`}
                value={value}
                onChange={onChange}
                name={name}
                style={{color: "darkred"}}
            />
            {error ? <p className="alert alert-danger" role="alert">{error}</p> : null}
        </div>
    );
}

export default FormGroup;