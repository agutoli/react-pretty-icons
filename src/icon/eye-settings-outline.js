import React from 'react';
import iconSvg from '../icons/normalized/eye-settings-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__eye-settings-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender