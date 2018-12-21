import React from 'react';
import iconSvg from '../icons/normalized/coffee-to-go.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__coffee-to-go" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender