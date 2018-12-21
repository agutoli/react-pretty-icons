import React from 'react';
import iconSvg from '../icons/normalized/emoticon-cool.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__emoticon-cool" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender