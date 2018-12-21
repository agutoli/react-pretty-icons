import React from 'react';
import iconSvg from '../icons/normalized/room-service.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__room-service" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender