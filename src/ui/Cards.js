import React from 'react';

const Cards = (props) => (
    <div className="col-12 col-sm-4" style={{paddingTop: '7px'}}>
        <div className="card">
            <img className="card-img-top rounded mx-auto d-block" style={{paddingTop: '15px', width: '100px', heigt: '100px'}} src={props.img} alt="Home Card" />
            <div className="card-block">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.text}</p>
                <button style={{marginBottom: '15px'}} className="btn btn-primary" onClick={props.action}>{props.title}</button>
            </div>
        </div>
    </div>

);

export default Cards;
