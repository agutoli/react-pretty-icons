import React from 'react';
import iconSvg from '../icons/normalized/projector-screen.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__projector-screen" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender