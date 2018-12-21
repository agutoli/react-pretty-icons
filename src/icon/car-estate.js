import React from 'react';
import iconSvg from '../icons/normalized/car-estate.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__car-estate" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender