export const onRouteUpdate = () => {
  navigator.serviceWorker.register('/sw.js').then((reg) => {
    reg.update();
  });
};
export const onServiceWorkerUpdateReady = () => {
  if (
    window.confirm(
      'This site has been updated fresh content. Would you like to reload?'
    )
  ) {
    window.location.reload(true);
  }
};
