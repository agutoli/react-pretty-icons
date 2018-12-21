import React from 'react';
import iconSvg from '../icons/normalized/emby.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__emby" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender