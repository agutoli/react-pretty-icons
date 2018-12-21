import React from 'react';
import iconSvg from '../icons/normalized/creation.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__creation" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender