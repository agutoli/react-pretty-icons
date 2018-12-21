import React from 'react';
import iconSvg from '../icons/normalized/airplane-landing.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__airplane-landing" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender