import React from 'react';
import iconSvg from '../icons/normalized/record-player.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__record-player" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender