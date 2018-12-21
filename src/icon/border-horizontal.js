import React from 'react';
import iconSvg from '../icons/normalized/border-horizontal.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__border-horizontal" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender