import React from 'react';
import iconSvg from '../icons/normalized/open-in-app.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__open-in-app" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender