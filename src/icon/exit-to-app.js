import React from 'react';
import iconSvg from '../icons/normalized/exit-to-app.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__exit-to-app" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender