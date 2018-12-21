import React from 'react';
import iconSvg from '../icons/normalized/emoticon-tongue.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__emoticon-tongue" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender