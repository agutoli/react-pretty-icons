import React from 'react';
import iconSvg from '../icons/normalized/black-cloud.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__black-cloud" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender