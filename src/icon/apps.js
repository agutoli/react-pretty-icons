import React from 'react';
import iconSvg from '../icons/normalized/apps.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__apps" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender