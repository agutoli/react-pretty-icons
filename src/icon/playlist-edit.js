import React from 'react';
import iconSvg from '../icons/normalized/playlist-edit.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__playlist-edit" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender