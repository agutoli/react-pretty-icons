import React from 'react';
import iconSvg from '../icons/normalized/lightbulb-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__lightbulb-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender