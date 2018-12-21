import React from 'react';
import iconSvg from '../icons/normalized/calendar-remove.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__calendar-remove" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender