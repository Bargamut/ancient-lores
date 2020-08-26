import * as React from 'react';
import { YMInitializer } from 'react-yandex-metrika';

const App = () => (
  <>
    {process.env.NODE_ENV === `production` &&
      <YMInitializer
        accounts={[ 61802230 ]}
        options={{ clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }}
        version="2"
      />
    }

    <div className="wrapper">

    </div>
  </>
);

export default App;
