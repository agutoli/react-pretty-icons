import React from 'react';
import iconSvg from '../icons/normalized/calendar-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__calendar-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender