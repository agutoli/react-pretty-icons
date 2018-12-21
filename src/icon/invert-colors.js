import React from 'react';
import iconSvg from '../icons/normalized/invert-colors.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__invert-colors" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender