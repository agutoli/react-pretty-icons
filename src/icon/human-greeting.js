import React from 'react';
import iconSvg from '../icons/normalized/human-greeting.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__human-greeting" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender