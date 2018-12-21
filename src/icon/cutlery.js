import React from 'react';
import iconSvg from '../icons/normalized/cutlery.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cutlery" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender