import React from 'react';


const Smurf = props => {
  console.log(props);
  
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
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

