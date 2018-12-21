import React from 'react';
import iconSvg from '../icons/normalized/meetup-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__meetup-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender