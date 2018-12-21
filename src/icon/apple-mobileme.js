import React from 'react';
import iconSvg from '../icons/normalized/apple-mobileme.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__apple-mobileme" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender