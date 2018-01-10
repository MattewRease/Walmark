import 'babel-polyfill';
/**
 * https://github.com/Keyamoon/svgxuse
 * If you do not use SVG <use xlink:href="…"> elements, remove svgxuse module
 */
import 'svgxuse';
import init from './init';
import { render, renderFactory } from './render';
import dropdown from './components/dropdown';
import accordion from './components/accordion';

const app = (config) => {
    init(document.getElementById('dropdown'));
};

app(window.config);
