import React from 'react';
import iconSvg from '../icons/normalized/zootool-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__zootool-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender