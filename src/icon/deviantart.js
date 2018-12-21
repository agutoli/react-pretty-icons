import React from 'react';
import iconSvg from '../icons/normalized/deviantart.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__deviantart" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender