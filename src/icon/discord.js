import React from 'react';
import iconSvg from '../icons/normalized/discord.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__discord" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender