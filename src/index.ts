import useProxy from 'rocket-booster';

addEventListener('fetch', (event) => {
  const proxy = useProxy();
  proxy.use('/', {
    upstream: {
      domain: 'bemiraculous.me',
      protocol: 'https',
    },
    cors: {
      origin: true,
    },
  });

  const response = proxy.apply(event.request);
  event.respondWith(response);
});
