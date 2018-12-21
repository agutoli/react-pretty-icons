import React from 'react';
import iconSvg from '../icons/normalized/lightbulb.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__lightbulb" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender