import React from 'react';
import iconSvg from '../icons/normalized/stumbleupon-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__stumbleupon-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender