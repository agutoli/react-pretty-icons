import React from 'react';
import iconSvg from '../icons/normalized/meetup.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__meetup" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender