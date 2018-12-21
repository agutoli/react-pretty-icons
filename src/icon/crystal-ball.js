import React from 'react';
import iconSvg from '../icons/normalized/crystal-ball.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__crystal-ball" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender