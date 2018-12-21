import React from 'react';
import iconSvg from '../icons/normalized/fridge-filled-bottom.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__fridge-filled-bottom" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender