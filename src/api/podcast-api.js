export const getPodcasts = () => {
  const response = fetch(
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
  ).then(async (res) => {
    const data = await res.json();
    const podcasts = data.feed.entry.map((p) => {
      const podcast = {
        name: p['im:name'].label,
        id: p.id.attributes['im:id'],
        author: p['im:artist'].label,
        image: p['im:image'][0].label,
      };
      return podcast;
    });
    return podcasts;
  });
  return response;
};
