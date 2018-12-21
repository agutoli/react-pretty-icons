import React from 'react';
import iconSvg from '../icons/normalized/emoticon-poop.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__emoticon-poop" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender