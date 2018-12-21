import React from 'react';
import iconSvg from '../icons/normalized/google-circles-group.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__google-circles-group" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender