import $ from 'jquery';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import * as pym from 'pym.js'

class Projection {
  constructor(data) {
    this.el = $(`js-data-wrapper`);
    this.hurricane = data.currenthurricane[0];
    this.currentData = this.hurricane.Current;
    this.time = this.currentData.Time.civil;
    this.windSpeed = `${this.currentData.WindSpeed.Mph} Mph`
    this.windGust = `${this.currentData.WindGust.Mph} Mph`
    this.movement = `${this.currentData.Movement.Text} at ${this.currentData.Fspeed.Mph} Mph`
  }

  render() {

  }
}

const loadExample = () => {
  $.getJSON(`http://api.wunderground.com/api/147b31846a27b039/currenthurricane/forecast/q/FL/Miami.json`, (data) => {
    new Projection(data).render();
  });
}

export { loadExample };
