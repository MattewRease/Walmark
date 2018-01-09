import 'babel-polyfill';
/**
 * https://github.com/Keyamoon/svgxuse
 * If you do not use SVG <use xlink:href="…"> elements, remove svgxuse module
 */
import 'svgxuse';
import init from './init';
import suffix from './components/suffix';
import dropdown from './components/dropdown';

const app = (config) => {
    init(suffix, document.querySelector('.js-suffix'));
    init(document.querySelector('.dropdown-content'));
};

app(null, window.config);
