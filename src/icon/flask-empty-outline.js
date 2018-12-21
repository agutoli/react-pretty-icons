import React from 'react';
import iconSvg from '../icons/normalized/flask-empty-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__flask-empty-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender