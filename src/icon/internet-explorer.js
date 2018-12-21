import React from 'react';
import iconSvg from '../icons/normalized/internet-explorer.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__internet-explorer" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender