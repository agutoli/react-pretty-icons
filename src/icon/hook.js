import React from 'react';
import iconSvg from '../icons/normalized/hook.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hook" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender