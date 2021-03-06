const Component = require('./Component')

module.exports = class Video extends Component {
  render() {
    return this.html`
      <div style="max-width: 600px; margin: 50px auto 0">
        <div class="responsive-video-wrapper reveal">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/XMrRrzYXav8" frameborder="0" allowfullscreen></iframe>
        </div>
        <style>
          .responsive-video-wrapper {
            position: relative;
            padding-bottom: 56.25%; /* 16:9 */
            height: 0;
          }
          .responsive-video-wrapper iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        </style>
      </div>
    `
  }
}
