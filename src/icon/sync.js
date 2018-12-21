import React from 'react';
import iconSvg from '../icons/normalized/sync.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sync" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender