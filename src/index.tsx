import './style/index.css';
import {h, Fragment} from "preact"
import {SamplePage} from "./widgets/SamplePage";
import { Route, Router } from 'preact-router';

export default function App() {
    return (<SamplePage/>)
};
