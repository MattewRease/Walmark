import 'babel-polyfill';
/**
 * https://github.com/Keyamoon/svgxuse
 * If you do not use SVG <use xlink:href="…"> elements, remove svgxuse module
 */
import 'svgxuse';
import init from './init';
import { render, renderFactory } from './render';
import dropdown from './components/dropdown';
import progress from './components/progress';
import shopping from './components/shopping';
import weight from './components/weight';
import liquid from './components/liquid';
import support from './components/support';
import weekNav from './components/weekNav';
import accordion from './components/accordion';
import request from './components/request';

const app = (config) => {
    init(dropdown, document.getElementById('dropdown'));
    init(shopping, document.querySelector('.shopping-list'));
    init(progress, document.getElementById('progress'));
    init(weight, document.querySelector('.health__weight'));
    init(liquid, document.querySelector('.health__liquid'));
    init(weekNav, document.querySelector('.health-support__navigation'));
    init(support, document.querySelector('.health-support'));
    init(accordion, document.getElementById('accordion'));
    init(request, document.getElementById('request'));
};

app(null, window.config);
