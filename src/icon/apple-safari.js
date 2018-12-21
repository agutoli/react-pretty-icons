import React from 'react';
import iconSvg from '../icons/normalized/apple-safari.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__apple-safari" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender