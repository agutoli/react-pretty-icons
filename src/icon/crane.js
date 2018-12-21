import React from 'react';
import iconSvg from '../icons/normalized/crane.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__crane" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender