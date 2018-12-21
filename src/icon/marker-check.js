import React from 'react';
import iconSvg from '../icons/normalized/marker-check.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__marker-check" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender