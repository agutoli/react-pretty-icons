import React from 'react';
import iconSvg from '../icons/normalized/pulse.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pulse" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender