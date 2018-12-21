import React from 'react';
import iconSvg from '../icons/normalized/calendar-import.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__calendar-import" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender