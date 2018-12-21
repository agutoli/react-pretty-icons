import React from 'react';
import iconSvg from '../icons/normalized/timelapse.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__timelapse" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender