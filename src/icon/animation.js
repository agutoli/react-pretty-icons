import React from 'react';
import iconSvg from '../icons/normalized/animation.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__animation" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender