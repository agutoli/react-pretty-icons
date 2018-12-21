import React from 'react';
import iconSvg from '../icons/normalized/trophy-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__trophy-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender