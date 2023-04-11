import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Content} from "./components/content/Content";
import {Skills} from "./skills/Skills";
import {Works} from "./works/Works";
import {RemoteWorks} from "./remoteWork/RemoteWorks";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Content/>
            <Skills/>
            <Works/>
            <RemoteWorks/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
