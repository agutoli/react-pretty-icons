import React from 'react';
import iconSvg from '../icons/normalized/human-female.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__human-female" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender