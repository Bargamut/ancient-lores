import * as React from 'react';
import { YMInitializer } from 'react-yandex-metrika';

import Button from '@material-ui/core/Button';

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
      <header>Ancient Lores: Airbrush & Leather</header>

      <Button variant="contained" color="secondary">
        Hello World!
      </Button>

      <footer className="site-footer">
        <p>© 2020 Paul "Bargamut" Petrov</p>

        <a href="https://bargamut.ru" target="__blank">bargamut.ru</a>
      </footer>
    </div>
  </>
);

export default App;
