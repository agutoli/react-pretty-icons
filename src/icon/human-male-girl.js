import React from 'react';
import iconSvg from '../icons/normalized/human-male-girl.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__human-male-girl" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender