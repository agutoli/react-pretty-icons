import React from 'react';
import iconSvg from '../icons/normalized/sofa.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sofa" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender