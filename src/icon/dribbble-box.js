import React from 'react';
import iconSvg from '../icons/normalized/dribbble-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__dribbble-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender