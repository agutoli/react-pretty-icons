import React from 'react';
import iconSvg from '../icons/normalized/fuel.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__fuel" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender