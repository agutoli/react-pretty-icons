import React from 'react';
import iconSvg from '../icons/normalized/recycle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__recycle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender