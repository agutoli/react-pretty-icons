import React from 'react';
import iconSvg from '../icons/normalized/npm.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__npm" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender