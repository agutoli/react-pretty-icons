import React from 'react';
import iconSvg from '../icons/normalized/tournament.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tournament" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender