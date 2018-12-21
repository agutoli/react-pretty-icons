import React from 'react';
import iconSvg from '../icons/normalized/dribble-logo-button.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__dribble-logo-button" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender