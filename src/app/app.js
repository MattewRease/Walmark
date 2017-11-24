import 'babel-polyfill';
/**
 * https://github.com/Keyamoon/svgxuse
 * If you do not use SVG <use xlink:href="…"> elements, remove svgxuse module
 */
import 'svgxuse';
import init from './init';
// import factory from './factory';
import { render, renderFactory } from './render';
import configureStore from './store/configureStore';
import cookieLaw from './components/cookie-law';
import suffix from './components/suffix';

const app = (config) => {
    init(cookieLaw, document.getElementById('cookie-law'));
    init(suffix, document.querySelector('.js-suffix'));
};

app(window.config);
