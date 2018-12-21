import React from 'react';
import iconSvg from '../icons/normalized/lightbulb-on.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__lightbulb-on" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender