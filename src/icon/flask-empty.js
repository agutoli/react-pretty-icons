import React from 'react';
import iconSvg from '../icons/normalized/flask-empty.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__flask-empty" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender