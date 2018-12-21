import React from 'react';
import iconSvg from '../icons/normalized/unfold-less-vertical.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__unfold-less-vertical" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender