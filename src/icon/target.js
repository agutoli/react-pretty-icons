import React from 'react';
import iconSvg from '../icons/normalized/target.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__target" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender