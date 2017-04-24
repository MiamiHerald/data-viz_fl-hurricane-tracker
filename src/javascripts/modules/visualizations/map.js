import $ from 'jquery';
import * as pym from 'pym.js'
window.$ = $;

const loadMap = () => {
  const dataUrl = `https://kdapena.carto.com/api/v2/viz/bc51a48c-8b39-11e6-b86e-0ee66e2c9693/viz.json`;

  cartodb.createVis('js-map', dataUrl, {
    shareable: false,
    title: false,
    description: false,
    search: false,
    tiles_loader: true,
    center_lat: 29,
    center_lon: -77,
    zoom: 4,
    zoomControl: true,
    cartodb_logo: false,
    urlTemplate:'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',
  });
}

export { loadMap };
