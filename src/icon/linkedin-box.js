import React from 'react';
import iconSvg from '../icons/normalized/linkedin-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__linkedin-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender