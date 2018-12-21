import React from 'react';
import iconSvg from '../icons/normalized/airplane-takeoff.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__airplane-takeoff" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender