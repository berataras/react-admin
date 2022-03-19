//components
import {Sidebar, Topbar} from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//global css
import './styles/global.css'
//pages
import {Home, Users, UserUpdate, UserCreate} from "./pages";
import {Context} from "./context/Context";
import {useState} from "react";

function App() {
    const [value, setValue] = useState('sa');
    return (
        <Context.Provider value={{value, setValue}}>
            <Router>
                <Topbar />
                <div className="container">
                    <Sidebar />
                    <Switch>
                        <Route exact path="/dashboard" component={Home} />
                        <Route exact path="/users" component={Users} />
                        <Route exact path="/users/create" component={UserCreate} />
                        <Route exact path="/users/:id" component={UserUpdate} />
                    </Switch>
                </div>
            </Router>
        </Context.Provider>
    );
}

export default App;
