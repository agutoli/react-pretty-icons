import React from 'react';
import iconSvg from '../icons/normalized/slack.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__slack" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender