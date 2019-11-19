import React from 'react';
import PropTypes from 'prop-types';
const TechItem = ({ tech, onDelete }) => {
  return (
    <li>{tech}
      <button onClick={onDelete} type="button" >Remover</button>
    </li>
  )
}
//define um valor de uma propriedade quando não passada
TechItem.defaultProps = {
  tech: 'Oculto'
}
//definindo prop types
TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default TechItem