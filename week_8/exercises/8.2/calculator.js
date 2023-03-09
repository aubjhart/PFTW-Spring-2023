Vue.createApp({
    data() {
      return {
        firstNum: null,
        secondNum: null,
        operation: 'add',
        total: null
        }
    },
    methods: {
        calculate (num1, num2) {
            switch (operation) {
                case 'add':
                   total = num1 + num2;
                   break;
                case 'subtract':
                    total = num1 - num2;
                    break;
                case 'multiply':
                    total = num1 * num2;
                    break;
                case 'divide':
                    total = num1 / num2;
                    break;
                default:
                    alert('unexpected operator');
                    break;
            }
        }
    }
  }).mount("#calculatorApp");
