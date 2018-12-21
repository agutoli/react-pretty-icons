import React from 'react';
import iconSvg from '../icons/normalized/city.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__city" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender