import React from 'react';
import iconSvg from '../icons/normalized/brain.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__brain" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender