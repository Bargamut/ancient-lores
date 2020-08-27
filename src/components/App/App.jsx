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
      <header>Ancient Lores: Airbrush & Leather</header>

      <footer className="site-footer">
        <p>© 2020 Paul "Bargamut" Petrov</p>

        <a href="https://bargamut.ru" target="__blank">bargamut.ru</a>
      </footer>
    </div>
  </>
);

export default App;
