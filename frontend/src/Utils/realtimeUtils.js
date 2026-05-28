export const simulateRealtimeData =
  (callback) => {

    const interval = setInterval(() => {

      callback({

        timestamp: new Date(),

        value:
          Math.floor(
            Math.random() * 1000
          )

      });

    }, 2000);

    return () => clearInterval(interval);
  };