import React from 'react';
import iconSvg from '../icons/normalized/contrast.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__contrast" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender