import React from 'react';
import iconSvg from '../icons/normalized/subtitles.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__subtitles" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender