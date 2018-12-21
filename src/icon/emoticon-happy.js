import React from 'react';
import iconSvg from '../icons/normalized/emoticon-happy.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__emoticon-happy" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender