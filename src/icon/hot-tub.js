import React from 'react';
import iconSvg from '../icons/normalized/hot-tub.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hot-tub" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender