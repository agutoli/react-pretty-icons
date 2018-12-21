import React from 'react';
import iconSvg from '../icons/normalized/solid.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__solid" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender