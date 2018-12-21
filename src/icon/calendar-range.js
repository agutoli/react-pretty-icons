import React from 'react';
import iconSvg from '../icons/normalized/calendar-range.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__calendar-range" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender