import React from 'react';
import iconSvg from '../icons/normalized/twitch.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__twitch" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender