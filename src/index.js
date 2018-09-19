// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var h = 0, q = 0, d = 0, n = 0, p = 0;
    var res = {};
    if(currency > 9999)
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    while(currency >= 50)
    {
        h++;
        currency -= 50;
        
    }
    if(h > 0)
        res["H"] = h;
    while(currency >= 25)
    {
        q++;
        currency -= 25;
    }
    if(q > 0)
        res["Q"] = q;
    while(currency >= 10)
    {
        d++;
        currency -= 10;
    }
    if(d > 0)
        res["D"] = d;
    while(currency >= 5)
    {
        n++;
        currency -= 5;
    }
    if(n > 0)
        res["N"] = n;
    while(currency >= 1)
    {
        p++;
        currency -= 1;
    }
    if(p > 0)
        res["P"] = p;
    return res;
}
