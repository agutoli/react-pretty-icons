import React from 'react';
import iconSvg from '../icons/normalized/fridge-filled-top.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__fridge-filled-top" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender