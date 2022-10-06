"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorld = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
class HelloWorld {
    sayHello(name) {
        return `Hello, ${name}`;
    }
    fibonacci(num) {
        let array = [0, 1];
        for (let i = 2; i < num + 1; i++) {
            array.push(array[i - 2] + array[i - 1]);
        }
        return array[num];
    }
}
exports.HelloWorld = HelloWorld;
_a = JSII_RTTI_SYMBOL_1;
HelloWorld[_a] = { fqn: "jsii-example.HelloWorld", version: "1.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQWEsVUFBVTtJQUNkLFFBQVEsQ0FBQyxJQUFZO1FBQzFCLE9BQU8sVUFBVSxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sU0FBUyxDQUFDLEdBQVc7UUFDMUIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QztRQUNELE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7O0FBWEgsZ0NBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSGVsbG9Xb3JsZCB7XG4gIHB1YmxpYyBzYXlIZWxsbyhuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYEhlbGxvLCAke25hbWV9YDtcbiAgfVxuXG4gIHB1YmxpYyBmaWJvbmFjY2kobnVtOiBudW1iZXIpIHtcbiAgICBsZXQgYXJyYXkgPSBbMCwgMV07XG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPCBudW0gKyAxOyBpKyspIHtcbiAgICAgIGFycmF5LnB1c2goYXJyYXlbaSAtIDJdICsgYXJyYXlbaSAtIDFdKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5W251bV07XG4gIH1cbn1cbiJdfQ==