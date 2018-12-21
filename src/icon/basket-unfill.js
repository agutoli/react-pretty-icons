import React from 'react';
import iconSvg from '../icons/normalized/basket-unfill.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__basket-unfill" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender