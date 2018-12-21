import React from 'react';
import iconSvg from '../icons/normalized/lifebuoy.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__lifebuoy" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender