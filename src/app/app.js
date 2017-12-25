import 'babel-polyfill';
/**
 * https://github.com/Keyamoon/svgxuse
 * If you do not use SVG <use xlink:href="…"> elements, remove svgxuse module
 */
import 'svgxuse';
import init from './init';
import { render, renderFactory } from './render';
import suffix from './components/suffix';
import dropdown from './components/dropdown';
import accordion from './components/accordion';

const app = (config) => {
    init(suffix, document.querySelector('.js-suffix'));
    render(suffix, document.getElementsById('dropdown'));
    render(suffix, document.getElementsById('accordion'));
};

app(window.config);
