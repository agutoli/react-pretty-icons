import React from 'react';
import iconSvg from '../icons/normalized/sync-alert.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sync-alert" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender