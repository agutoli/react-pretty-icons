import React from 'react';
import iconSvg from '../icons/normalized/volume-mute.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__volume-mute" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender