import React from 'react';
import iconSvg from '../icons/normalized/youtube-gaming.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__youtube-gaming" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender