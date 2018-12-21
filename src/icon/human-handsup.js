import React from 'react';
import iconSvg from '../icons/normalized/human-handsup.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__human-handsup" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender