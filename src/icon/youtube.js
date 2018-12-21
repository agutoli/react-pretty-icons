import React from 'react';
import iconSvg from '../icons/normalized/youtube.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__youtube" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender