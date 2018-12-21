import React from 'react';
import iconSvg from '../icons/normalized/calendar-heart.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__calendar-heart" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender