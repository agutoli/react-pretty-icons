import React from 'react';
import iconSvg from '../icons/normalized/clapperboard.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__clapperboard" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender