import React from 'react';
import iconSvg from '../icons/normalized/barn.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__barn" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender