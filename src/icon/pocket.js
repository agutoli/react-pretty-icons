import React from 'react';
import iconSvg from '../icons/normalized/pocket.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pocket" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender