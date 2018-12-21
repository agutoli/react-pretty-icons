import React from 'react';
import iconSvg from '../icons/normalized/emoticon-sad.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__emoticon-sad" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender