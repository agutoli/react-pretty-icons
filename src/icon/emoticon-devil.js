import React from 'react';
import iconSvg from '../icons/normalized/emoticon-devil.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__emoticon-devil" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender