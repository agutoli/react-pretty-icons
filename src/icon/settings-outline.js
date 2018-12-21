import React from 'react';
import iconSvg from '../icons/normalized/settings-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__settings-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender