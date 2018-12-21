import React from 'react';
import iconSvg from '../icons/normalized/salesforce.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__salesforce" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender