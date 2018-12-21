import React from 'react';
import iconSvg from '../icons/normalized/pinterest.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pinterest" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender