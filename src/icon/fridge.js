import React from 'react';
import iconSvg from '../icons/normalized/fridge.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__fridge" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender