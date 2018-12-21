import React from 'react';
import iconSvg from '../icons/normalized/basket-fill.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__basket-fill" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender