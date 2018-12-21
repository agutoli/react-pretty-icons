import React from 'react';
import iconSvg from '../icons/normalized/origin.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__origin" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender