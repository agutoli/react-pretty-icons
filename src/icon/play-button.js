import React from 'react';
import iconSvg from '../icons/normalized/play-button.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__play-button" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender