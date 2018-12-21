import React from 'react';
import iconSvg from '../icons/normalized/timetable.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__timetable" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender