import React from 'react';
import { render } from 'react-dom';
import Tree from './treeView';
import ObjectTree from './object';

const value = true;
const appRoot = document.getElementById('root');

render(
    <Tree data={ObjectTree} collapse={value}/>,
    appRoot
);
