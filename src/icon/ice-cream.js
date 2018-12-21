import React from 'react';
import iconSvg from '../icons/normalized/ice-cream.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ice-cream" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender