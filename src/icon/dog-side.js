import React from 'react';
import iconSvg from '../icons/normalized/dog-side.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__dog-side" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender