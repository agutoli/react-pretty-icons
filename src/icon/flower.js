import React from 'react';
import iconSvg from '../icons/normalized/flower.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__flower" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender