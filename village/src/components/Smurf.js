import React from 'react';
import {Link} from 'react-router-dom';


const Smurf = props => {
  
  return (
    <div className="Smurf">
      <h3>
        <Link 
          to={`/smurfs/${props.id}`}
          onClick={event => props.setActiveSmurf(event, props, `/smurfs/${props.id}`)} 
        >
          {props.name}
        </Link>
      </h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <p 
        onClick={event => props.removeSmurf(event, props.id)}
        className='deleteSmurf'
        >
        DELETE
      </p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

