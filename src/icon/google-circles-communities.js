import React from 'react';
import iconSvg from '../icons/normalized/google-circles-communities.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__google-circles-communities" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender