import React from 'react';
import iconSvg from '../icons/normalized/camera-account.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__camera-account" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender