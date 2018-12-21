import React from 'react';
import iconSvg from '../icons/normalized/youtube-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__youtube-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender