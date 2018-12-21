import React from 'react';
import iconSvg from '../icons/normalized/downloading-action.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__downloading-action" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender