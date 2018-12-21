import React from 'react';
import iconSvg from '../icons/normalized/swim.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__swim" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender