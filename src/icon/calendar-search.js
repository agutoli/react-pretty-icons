import React from 'react';
import iconSvg from '../icons/normalized/calendar-search.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__calendar-search" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender