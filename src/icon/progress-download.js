import React from 'react';
import iconSvg from '../icons/normalized/progress-download.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__progress-download" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender