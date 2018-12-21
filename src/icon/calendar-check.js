import React from 'react';
import iconSvg from '../icons/normalized/calendar-check.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__calendar-check" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender