const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const playlistUrl = 'https://raw.githubusercontent.com/sdlkhfksl/tvn/refs/heads/main/tv.m3u';

  try {
    const response = await fetch(playlistUrl);
    const data = await response.text();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send('Error fetching playlist');
  }
};