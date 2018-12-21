import React from 'react';
import iconSvg from '../icons/normalized/zynga-logotype.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__zynga-logotype" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender