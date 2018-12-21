import React from 'react';
import iconSvg from '../icons/normalized/calendar-today.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__calendar-today" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender