import React from 'react';
import iconSvg from '../icons/normalized/folder-google-drive.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__folder-google-drive" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender