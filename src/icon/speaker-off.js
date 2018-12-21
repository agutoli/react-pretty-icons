import React from 'react';
import iconSvg from '../icons/normalized/speaker-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__speaker-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender