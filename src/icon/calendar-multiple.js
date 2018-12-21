import React from 'react';
import iconSvg from '../icons/normalized/calendar-multiple.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__calendar-multiple" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender