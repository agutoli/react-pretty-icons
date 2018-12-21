import React from 'react';
import iconSvg from '../icons/normalized/steering.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__steering" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender