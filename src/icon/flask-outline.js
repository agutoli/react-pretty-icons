import React from 'react';
import iconSvg from '../icons/normalized/flask-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__flask-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender