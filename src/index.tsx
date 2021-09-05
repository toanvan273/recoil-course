import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Canvas from './Canvas'
import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import {RecoilRoot } from 'recoil'
import Atoms from './examples/Atoms'
import { Async } from './examples/AsyncV2'
import {Selectors} from './examples/Selectors'

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <ChakraProvider>
                <Router>
                    <Switch>
                        <Route exact path="/examples/selectors">
                            <Selectors />
                        </Route>

                        <Route exact path="/examples/atoms" >
                            <Atoms />
                        </Route>

                        <Route exact path="/examples/async" >
                            <Suspense fallback={<div>Loading...</div>}>
                                <Async />
                            </Suspense>
                        </Route>

                        <Route exact path="/">
                            <Canvas />
                        </Route>
                    </Switch>
                </Router>
            </ChakraProvider>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root'),
)
