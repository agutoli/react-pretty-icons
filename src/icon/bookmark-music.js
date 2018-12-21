import React from 'react';
import iconSvg from '../icons/normalized/bookmark-music.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bookmark-music" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender