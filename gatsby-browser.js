export const onRouteUpdate = () => {
  navigator.serviceWorker.register('/sw.js').then((reg) => {
    reg.update();
  });
};

export const onServiceWorkerUpdateReady = () => {
  document
    .getElementById('___gatsby')
    .setAttribute('data-update-available', 'true');
  console.info('PWA update available.');
};
