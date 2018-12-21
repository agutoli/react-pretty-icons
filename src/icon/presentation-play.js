import React from 'react';
import iconSvg from '../icons/normalized/presentation-play.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__presentation-play" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender