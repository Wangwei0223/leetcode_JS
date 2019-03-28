# https://github.com/mqyqingfeng/Blog/issues/3
# JavaScript深入之词法作用域和动态作用域
value=1
function foo () {
    echo $value;
}
function bar () {
    local value=2;
    foo;
}
bar