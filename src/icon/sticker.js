import React from 'react';
import iconSvg from '../icons/normalized/sticker.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sticker" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender