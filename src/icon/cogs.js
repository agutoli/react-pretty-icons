import React from 'react';
import iconSvg from '../icons/normalized/cogs.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cogs" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender