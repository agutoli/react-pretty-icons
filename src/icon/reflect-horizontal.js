import React from 'react';
import iconSvg from '../icons/normalized/reflect-horizontal.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__reflect-horizontal" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender