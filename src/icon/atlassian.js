import React from 'react';
import iconSvg from '../icons/normalized/atlassian.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__atlassian" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender