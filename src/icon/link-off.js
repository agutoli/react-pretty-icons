import React from 'react';
import iconSvg from '../icons/normalized/link-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__link-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender