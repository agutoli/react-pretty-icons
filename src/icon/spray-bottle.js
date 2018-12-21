import React from 'react';
import iconSvg from '../icons/normalized/spray-bottle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__spray-bottle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender