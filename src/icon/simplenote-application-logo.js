import React from 'react';
import iconSvg from '../icons/normalized/simplenote-application-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__simplenote-application-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender