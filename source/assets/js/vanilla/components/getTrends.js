/**
 *
 * @param {Object} data
 * @param {DOM} $target
 * @property {Object} trends
 * @property {number} maxTrends
 * @property {string} html
 * @property {number} len
 */
export default function getTrends(data, $target) {

  let trends    = data[0].trends;
  let maxTrends = 10;
  let html      = '';
  let len;

  let list = document.createElement('ul');
  list.className = 'widgetTrends-list';

  if( trends.length >= maxTrends){
    len = maxTrends;
  } else {
    len = trends.length;
  }

  for (let i = 0; i < len; i++) {
    html += `
    <li class="widgetTrends-item">
      <a class="widgetTrends-link" href="">
        <strong class="widgetTrends-name">${trends[i]['name']}</strong>
    `;

    if(trends[i]['tweet_volume']){
      html += `<span class="widgetTrends-stats">${trends[i]['tweet_volume']} Tweets</span>`;
    }

    html += `
      </a>
    </li>`;
  }

  list.innerHTML = html;

  $target.appendChild(list);
}
