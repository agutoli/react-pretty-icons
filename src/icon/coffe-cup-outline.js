import React from 'react';
import iconSvg from '../icons/normalized/coffe-cup-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__coffe-cup-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender