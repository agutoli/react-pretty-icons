import React from 'react';
import iconSvg from '../icons/normalized/home-alert.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__home-alert" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender