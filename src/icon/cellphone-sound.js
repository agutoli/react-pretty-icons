import React from 'react';
import iconSvg from '../icons/normalized/cellphone-sound.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cellphone-sound" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender