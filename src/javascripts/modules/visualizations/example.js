import $ from 'jquery';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import * as pym from 'pym.js'

class Projection {
  constructor(data) {
    this.hurricane = data.currenthurricane[0];
    this.currentData = this.hurricane.Current;
    this.time = `${this.currentData.Time.civil.replace(":00 AM", "")} a.m.`;
    this.windSpeed = `${this.currentData.WindSpeed.Mph} mph`;
    this.windGust = `${this.currentData.WindGust.Mph} mph`;
    this.movement = `${this.currentData.Movement.Text} at ${this.currentData.Fspeed.Mph} mph`;
  }

  render() {
    d3.select(`#js-data-wrapper`)
        .html(`
          <h1>${this.time} Hurricane Matthew update</h1>
          <table>
            <tr>
              <th>
                Movement:
              </th>
              <th>
                Max winds:
              </th>
              <th>
                Wind gusts:
              </th>
            </tr>
            <tr>
              <td>
                ${this.movement}
              </td>
              <td>
                ${this.windSpeed}
              </td>
              <td>
                ${this.windGust}
              </td>
            </tr>
          </table>
        `)
  }
}

const loadExample = () => {
  // $.getJSON(`http://api.wunderground.com/api/147b31846a27b039/currenthurricane/forecast/q/FL/Miami.json`, (data) => {
  $.getJSON(`http://pubsys.miamiherald.com/static/media/projects/2016/hurricane-matthew/data/wu.json`, (data) => {
    new Projection(data).render();
  });
}

export { loadExample };
