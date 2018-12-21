import React from 'react';
import iconSvg from '../icons/normalized/glasses.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__glasses" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender