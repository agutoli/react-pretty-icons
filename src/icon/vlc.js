import React from 'react';
import iconSvg from '../icons/normalized/vlc.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__vlc" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender