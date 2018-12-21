import React from 'react';
import iconSvg from '../icons/normalized/replay.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__replay" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender