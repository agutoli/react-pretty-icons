import React from 'react';
import iconSvg from '../icons/normalized/calendar-week.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__calendar-week" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender