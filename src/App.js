import React,{ Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import LoadingAnimation from './Components/LoadingAnimation/LoadingAnimation';

const Home = lazy(() => import('./Components/Home'));
const AgendaAfter = lazy(() => import('./Components/Agenda/AgendaAfter'));
const AgendaBefore = lazy(() => import('./Components/Agenda/AgendaBefore'));


function App() {
  return (
    <>
      <Router>
        <Header/>
          <Suspense  fallback={<LoadingAnimation/>}>
            <Route exact path="/" component={Home}/>
            <Route exact path="/agenda" component={AgendaAfter}/>
            <Route path="/agenda/agenda-sebelumnya" component={AgendaBefore}/>
          </Suspense>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
