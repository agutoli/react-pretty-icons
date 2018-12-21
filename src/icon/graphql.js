import React from 'react';
import iconSvg from '../icons/normalized/graphql.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__graphql" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender