import React from 'react';
import iconSvg from '../icons/normalized/bone.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bone" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender