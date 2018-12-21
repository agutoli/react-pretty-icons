import React from 'react';
import iconSvg from '../icons/normalized/smog.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__smog" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender