import React from 'react';
import iconSvg from '../icons/normalized/clip.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__clip" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender