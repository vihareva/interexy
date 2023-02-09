// import {hardCalc} from "./index.js";
//
// onmessage = function(e) {
//     console.log(e.data);
//     hardCalc(e.data)
//     postMessage('message received from worker');
// }
//To load web worker from FILE in a project set up with Webpack
(() => {
    console.log("worker_function loaded");

    window.worker_function = function() {
        self.onmessage = (e) => {
            console.log(e);

            function fibonacci(num) {
                if (num < 2) {
                    return num
                }
                return fibonacci(num - 1) + fibonacci(num - 2)
            }
            self.postMessage(fibonacci(e.data));
        };

}
})();
