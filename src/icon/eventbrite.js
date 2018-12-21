import React from 'react';
import iconSvg from '../icons/normalized/eventbrite.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__eventbrite" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender