import React from 'react';
import iconSvg from '../icons/normalized/calendar-edit.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__calendar-edit" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender