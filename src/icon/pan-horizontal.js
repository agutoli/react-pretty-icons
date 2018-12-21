import React from 'react';
import iconSvg from '../icons/normalized/pan-horizontal.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pan-horizontal" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender