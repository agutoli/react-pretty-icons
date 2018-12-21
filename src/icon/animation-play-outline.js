import React from 'react';
import iconSvg from '../icons/normalized/animation-play-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__animation-play-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender