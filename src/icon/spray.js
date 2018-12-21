import React from 'react';
import iconSvg from '../icons/normalized/spray.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__spray" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender