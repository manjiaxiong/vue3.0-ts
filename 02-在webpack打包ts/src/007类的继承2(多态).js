var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function () {
    var Animal = (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.run = function (distance) {
            if (distance === void 0) { distance = 0; }
            console.log(this.name + " run " + distance + "m");
        };
        return Animal;
    }());
    var Snake = (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            // 调用父类型构造方法
            _super.call(this, name);
        }
        // 重写父类型的方法
        Snake.prototype.run = function (distance) {
            if (distance === void 0) { distance = 5; }
            console.log('sliding...');
            _super.prototype.run.call(this, distance);
        };
        return Snake;
    }(Animal));
    var Horse = (function (_super) {
        __extends(Horse, _super);
        function Horse(name) {
            // 调用父类型构造方法
            _super.call(this, name);
        }
        // 重写父类型的方法
        Horse.prototype.run = function (distance) {
            if (distance === void 0) { distance = 50; }
            console.log('dashing...');
            // 调用父类型的一般方法
            _super.prototype.run.call(this, distance);
        };
        Horse.prototype.xxx = function () {
            console.log('xxx()');
        };
        return Horse;
    }(Animal));
    var snake = new Snake('sn');
    snake.run();
    var horse = new Horse('ho');
    horse.run();
    // 父类型引用指向子类型的实例 ==> 多态
    var tom = new Horse('ho22');
    tom.run();
    /* 如果子类型没有扩展的方法, 可以让子类型引用指向父类型的实例 */
    var tom3 = new Animal('tom3');
    tom3.run();
    /* 如果子类型有扩展的方法, 不能让子类型引用指向父类型的实例 */
    var tom2 = new Animal('tom2');
    tom2.run();
})();
