import React from 'react';
import iconSvg from '../icons/normalized/youtube-tv.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__youtube-tv" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender