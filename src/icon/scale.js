import React from 'react';
import iconSvg from '../icons/normalized/scale.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__scale" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender