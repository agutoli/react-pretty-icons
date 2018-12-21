import React from 'react';
import iconSvg from '../icons/normalized/calendar-multiple-check.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__calendar-multiple-check" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender