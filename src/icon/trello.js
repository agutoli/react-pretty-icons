import React from 'react';
import iconSvg from '../icons/normalized/trello.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__trello" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender