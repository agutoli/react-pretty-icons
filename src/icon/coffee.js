import React from 'react';
import iconSvg from '../icons/normalized/coffee.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__coffee" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender