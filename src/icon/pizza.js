import React from 'react';
import iconSvg from '../icons/normalized/pizza.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pizza" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender