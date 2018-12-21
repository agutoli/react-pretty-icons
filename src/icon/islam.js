import React from 'react';
import iconSvg from '../icons/normalized/islam.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__islam" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender