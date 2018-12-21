import React from 'react';
import iconSvg from '../icons/normalized/teamspeak.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__teamspeak" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender