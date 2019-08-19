import { BrowserRouter, Route } from 'react-router-dom'
import React from 'react'

import Cadastrar from './pages/Cadastrar'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Cadastrar} />
            <Route path="/main" component={Cadastrar} />
        </BrowserRouter>
        )
}