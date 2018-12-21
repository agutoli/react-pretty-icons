import React from 'react';
import iconSvg from '../icons/normalized/wikipedia.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__wikipedia" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender