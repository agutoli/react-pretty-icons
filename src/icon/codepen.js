import React from 'react';
import iconSvg from '../icons/normalized/codepen.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__codepen" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender