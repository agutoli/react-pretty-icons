import React from 'react';
import iconSvg from '../icons/normalized/screwdriver.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__screwdriver" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender