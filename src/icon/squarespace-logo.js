import React from 'react';
import iconSvg from '../icons/normalized/squarespace-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__squarespace-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender