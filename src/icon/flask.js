import React from 'react';
import iconSvg from '../icons/normalized/flask.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__flask" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender