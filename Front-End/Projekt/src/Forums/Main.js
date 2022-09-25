import React from 'react';

import { Switch, Route } from 'react-router-dom'

const Home = () => <div>this is Home</div>
const Forum = () => <div>this is Forum</div>
const Articles = () => <div>this is Articles</div>

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/Main.js' component={Home} />
            <Route exact path='/Forums.js' component={Forum} />
            <Route exact path='/Articles.js' component={Articles} />
        </Switch>
    </main>
)

export default Main;
