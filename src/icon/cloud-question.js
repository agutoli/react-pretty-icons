import React from 'react';
import iconSvg from '../icons/normalized/cloud-question.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cloud-question" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender