import React from 'react';
import iconSvg from '../icons/normalized/progress-check.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__progress-check" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender