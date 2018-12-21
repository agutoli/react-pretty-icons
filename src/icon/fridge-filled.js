import React from 'react';
import iconSvg from '../icons/normalized/fridge-filled.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__fridge-filled" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender