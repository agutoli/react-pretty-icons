import React from 'react';
import iconSvg from '../icons/normalized/calendar-question.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__calendar-question" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender