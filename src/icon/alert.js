import React from 'react';
import iconSvg from '../icons/normalized/alert.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alert" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender