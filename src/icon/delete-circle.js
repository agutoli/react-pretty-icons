import React from 'react';
import iconSvg from '../icons/normalized/delete-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__delete-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender