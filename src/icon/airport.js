import React from 'react';
import iconSvg from '../icons/normalized/airport.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__airport" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender