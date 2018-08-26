import React from 'react';
import 'normalize.css';
import PropTypes from 'prop-types'; // ES6
import "styles/base/_main.sass"  // Global styles


const DataDisplay = ({ firstName, lastName}) => {
return (





    <div className="FontColor">
      {firstName} {lastName}

  </div>)
};

DataDisplay.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string

}



export default  DataDisplay;
