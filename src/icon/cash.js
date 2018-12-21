import React from 'react';
import iconSvg from '../icons/normalized/cash.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cash" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender