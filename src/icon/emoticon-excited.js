import React from 'react';
import iconSvg from '../icons/normalized/emoticon-excited.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__emoticon-excited" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender