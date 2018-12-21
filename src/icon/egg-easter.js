import React from 'react';
import iconSvg from '../icons/normalized/egg-easter.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__egg-easter" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender