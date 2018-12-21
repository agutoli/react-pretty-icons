import React from 'react';
import iconSvg from '../icons/normalized/emoticon-neutral.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__emoticon-neutral" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender