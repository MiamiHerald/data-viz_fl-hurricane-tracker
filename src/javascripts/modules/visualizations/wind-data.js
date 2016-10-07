import $ from 'jquery';
import * as pym from 'pym.js'
window.$ = $;

class Projection {
  constructor(data) {
    this.hurricane = data.currenthurricane[0];
    this.currentData = this.hurricane.Current;
    if (this.currentData.Time.ampm === `AM`) {
      this.time = `${this.currentData.Time.civil.replace(`:00 AM`, ``)} a.m.`;
    } else if (this.currentData.Time.ampm === `PM`) {
      this.time = `${this.currentData.Time.civil.replace(`:00 PM`, ``)} p.m.`;
    } else {
      this.time = `${this.currentData.Time.civil}`;
    }
    this.windSpeed = `${this.currentData.WindSpeed.Mph} mph`;
    this.windGust = `${this.currentData.WindGust.Mph} mph`;
    this.movement = `${this.currentData.Movement.Text} at ${this.currentData.Fspeed.Mph} mph`;
  }

  render() {
    $(`#js-data-wrapper`)
        .html(`
          <h2>${this.time} update</h2>
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

const loadWindData = () => {
  $.getJSON(`http://api.wunderground.com/api/147b31846a27b039/currenthurricane/forecast/q/FL/Miami.json`, (data) => {
  // $.getJSON(`http://pubsys.miamiherald.com/static/media/projects/2016/hurricane-matthew/data/wu.json`, (data) => {
    new Projection(data).render();
  });
}

export { loadWindData };
