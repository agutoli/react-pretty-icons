import React from 'react';
import iconSvg from '../icons/normalized/gdgt-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gdgt-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender