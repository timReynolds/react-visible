import React from 'react';
import ReactDom from 'react-dom';
import Visible from 'Visible';

ReactDom.render(
  <div>
    <Visible isVisible={ true }>
      Text that is visible
    </Visible>
    <Visible isVisible= { false }>
      Text that is NOT visible
    </Visible>
  </div>
  ,
  document.getElementById('root')
  );
