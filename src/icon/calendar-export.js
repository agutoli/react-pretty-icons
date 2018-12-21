import React from 'react';
import iconSvg from '../icons/normalized/calendar-export.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__calendar-export" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender