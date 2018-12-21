import React from 'react';
import iconSvg from '../icons/normalized/headphones-settings.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__headphones-settings" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender