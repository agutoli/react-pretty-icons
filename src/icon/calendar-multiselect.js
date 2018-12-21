import React from 'react';
import iconSvg from '../icons/normalized/calendar-multiselect.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__calendar-multiselect" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender