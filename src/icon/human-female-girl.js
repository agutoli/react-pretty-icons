import React from 'react';
import iconSvg from '../icons/normalized/human-female-girl.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__human-female-girl" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender