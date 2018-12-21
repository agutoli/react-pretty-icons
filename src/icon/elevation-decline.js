import React from 'react';
import iconSvg from '../icons/normalized/elevation-decline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__elevation-decline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender