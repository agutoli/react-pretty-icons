import React from 'react';
import iconSvg from '../icons/normalized/flag-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__flag-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender