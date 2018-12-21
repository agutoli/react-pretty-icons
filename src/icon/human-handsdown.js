import React from 'react';
import iconSvg from '../icons/normalized/human-handsdown.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__human-handsdown" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender