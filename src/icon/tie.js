import React from 'react';
import iconSvg from '../icons/normalized/tie.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tie" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender