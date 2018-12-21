import React from 'react';
import iconSvg from '../icons/normalized/poll.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__poll" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender