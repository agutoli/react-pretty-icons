import React from 'react';
import iconSvg from '../icons/normalized/calendar-week-begin.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__calendar-week-begin" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender