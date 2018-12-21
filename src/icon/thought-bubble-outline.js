import React from 'react';
import iconSvg from '../icons/normalized/thought-bubble-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__thought-bubble-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender