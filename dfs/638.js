/**
 * 638. Shopping Offers
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function(price, special, needs) {
    return buySpecial(price, special, needs);
};

var buySpecial = function(price, special, needs){
    let cost = 0;
    let res = buyNormal(needs, price);
    for(let j of special){
        let temp = needs.slice();
        for(var i = 0; i < temp.length; i++){
            if(temp[i] - j[i] < 0) break;
            temp[i] = temp[i] - j[i];
        }
        if(i === needs.length){
            res = Math.min(res, j[i] + buySpecial(price, special, temp));
        }
    }
    return res;
}


var buyNormal = function(needs, price){
    let cost = 0;
    for(let i = 0; i < needs.length; i++){
        cost += needs[i]*price[i];
    }
    return cost;
}