import React from 'react';
import iconSvg from '../icons/normalized/reproduction.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__reproduction" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender