import React from 'react';
import iconSvg from '../icons/normalized/crown.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__crown" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender