import React from 'react';
import iconSvg from '../icons/normalized/inbox-arrow-down.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__inbox-arrow-down" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender