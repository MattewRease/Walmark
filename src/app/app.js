import 'babel-polyfill';
/**
 * https://github.com/Keyamoon/svgxuse
 * If you do not use SVG <use xlink:href="…"> elements, remove svgxuse module
 */
import 'svgxuse';
import init from './init';
// import { render, renderFactory } from './render';
import suffix from './components/suffix';
import dropdown from './components/dropdown';

const app = (config) => {
    init(suffix, document.querySelector('.js-suffix'));
    init(dropdown, document.querySelector('#dropdown'));
};

app(null, window.config);
