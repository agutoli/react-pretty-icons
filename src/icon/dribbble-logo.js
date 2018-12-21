import React from 'react';
import iconSvg from '../icons/normalized/dribbble-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__dribbble-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender