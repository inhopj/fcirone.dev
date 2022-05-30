
const fs = require('fs')
const RSS =  require('rss')

let feeds = JSON.parse(fs.readFileSync(`${process.cwd()}/public/feeds.json`))

const generateRss = () => {
  const rss = new RSS({
    title: 'Fracensco Cirone',
    site_url: 'https://www.fcirone.dev',
    feed_url: 'https://www.fcirone.dev/rss.xml'
  });
  const { javascript, node, react } = feeds
  const allFeeds = javascript.concat(node).concat(react)
  allFeeds.map((feed) => {
    rss.item({
      title: feed.title,
      url: feed.link,
    });
  });

  fs.writeFileSync(`${process.cwd()}/public/rss.xml`, rss.xml({ indent: true }));
}

generateRss()
