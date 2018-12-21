import React from 'react';
import iconSvg from '../icons/normalized/basecamp.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__basecamp" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender