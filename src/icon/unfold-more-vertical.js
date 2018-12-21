import React from 'react';
import iconSvg from '../icons/normalized/unfold-more-vertical.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__unfold-more-vertical" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender