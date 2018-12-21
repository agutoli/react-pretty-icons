import React from 'react';
import iconSvg from '../icons/normalized/emoticon-dead.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__emoticon-dead" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender