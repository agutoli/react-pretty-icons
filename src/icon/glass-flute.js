import React from 'react';
import iconSvg from '../icons/normalized/glass-flute.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__glass-flute" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender