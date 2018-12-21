import React from 'react';
import iconSvg from '../icons/normalized/alert-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alert-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender