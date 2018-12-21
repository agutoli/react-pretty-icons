import React from 'react';
import iconSvg from '../icons/normalized/calendar-clock.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__calendar-clock" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender