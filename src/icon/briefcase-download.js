import React from 'react';
import iconSvg from '../icons/normalized/briefcase-download.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__briefcase-download" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender