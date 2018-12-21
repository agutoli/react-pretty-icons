import React from 'react';
import iconSvg from '../icons/normalized/calendar-blank.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__calendar-blank" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender