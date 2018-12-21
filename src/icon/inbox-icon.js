import React from 'react';
import iconSvg from '../icons/normalized/inbox-icon.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__inbox-icon" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender