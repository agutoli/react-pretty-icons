import React from 'react';
import iconSvg from '../icons/normalized/skip-next.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__skip-next" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender