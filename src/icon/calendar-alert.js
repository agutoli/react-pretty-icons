import React from 'react';
import iconSvg from '../icons/normalized/calendar-alert.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__calendar-alert" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender