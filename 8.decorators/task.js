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
  let timerId;
  let firstCall = true;

  function wrapper(...args) {
    if (firstCall) {      
      func.call(this, ...args);
      firstCall = false;
      wrapper.count++;      
    }

    wrapper.allCount++;
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.call(this, ...args);
      wrapper.count++;
    }, delay);
  };

  wrapper.allCount = 0;
  wrapper.count = 0;
  return wrapper;
}