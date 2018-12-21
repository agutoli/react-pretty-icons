import React from 'react';
import iconSvg from '../icons/normalized/nutrition.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__nutrition" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender