import React from 'react';
import iconSvg from '../icons/normalized/lightbulb-on-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__lightbulb-on-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender