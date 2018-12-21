import React from 'react';
import iconSvg from '../icons/normalized/compact-disc-icon.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__compact-disc-icon" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender