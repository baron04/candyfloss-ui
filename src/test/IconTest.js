import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'

import Icon from '../components/Icon/icon'

// library.add(faCheckSquare, faCoffee)
library.add(fas)

function IconTest() {

  return (
    <div>
      <FontAwesomeIcon icon={faCoffee} size="9x" />

      <Icon icon="coffee" theme="primary" size="6x" />
      <Icon icon="arrow-down" theme="danger" size="1x" />
    </div>
  )
}

export default IconTest;