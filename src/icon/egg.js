import React from 'react';
import iconSvg from '../icons/normalized/egg.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__egg" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender