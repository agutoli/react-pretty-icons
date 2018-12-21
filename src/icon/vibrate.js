import React from 'react';
import iconSvg from '../icons/normalized/vibrate.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__vibrate" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender