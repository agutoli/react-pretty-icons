import React from 'react';
import iconSvg from '../icons/normalized/sticker-emoji.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sticker-emoji" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender