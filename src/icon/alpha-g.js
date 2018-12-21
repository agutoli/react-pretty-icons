import React from 'react';
import iconSvg from '../icons/normalized/alpha-g.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-g" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender