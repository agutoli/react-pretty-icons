import React from 'react';
import iconSvg from '../icons/normalized/view-headline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__view-headline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender