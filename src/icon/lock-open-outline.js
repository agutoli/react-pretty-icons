import React from 'react';
import iconSvg from '../icons/normalized/lock-open-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__lock-open-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender