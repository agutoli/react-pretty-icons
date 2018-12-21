import React from 'react';
import iconSvg from '../icons/normalized/forklift.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__forklift" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender