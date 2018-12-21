import React from 'react';
import iconSvg from '../icons/normalized/calendar-select.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__calendar-select" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender