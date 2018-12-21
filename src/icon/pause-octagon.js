import React from 'react';
import iconSvg from '../icons/normalized/pause-octagon.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pause-octagon" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender