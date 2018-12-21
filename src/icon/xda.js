import React from 'react';
import iconSvg from '../icons/normalized/xda.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__xda" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender