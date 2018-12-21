import React from 'react';
import iconSvg from '../icons/normalized/male.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__male" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender