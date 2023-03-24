//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = args.join(',');
        let idx = cache.findIndex((item)=> item.hash === hash);
        if (idx !== -1) { 
            console.log("Из кэша: " + cache[idx].result);
            return "Из кэша: " + cache[idx].result;
        }

        let result = func(...args);
        cache.push( {hash, result} );
        if (cache.length > 5) { 
        cache.shift();
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;  
    }
    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeout;
  let firstCall = true;

  return function (...rest) {
    if (firstCall) {
      func.call(this, ...rest);
      firstCall = false;
      return
    }

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.call(this, ...rest);
      firstCall = true;
    }, delay);
  };
} 

function debounceDecorator2(func, delay) {
  // Ваш код
  let timerId;
  let firstCall = true;

  function wrapper(...args) {
    if (firstCall) {
      func.call(this, ...args);
      firstCall = false;
      wrapper.count++;
      return
    }

    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.call(this, ...args);
      firstCall = true;
      wrapper.count++;
    }, delay);
  };

  wrapper.count = 0;

  return wrapper;
}