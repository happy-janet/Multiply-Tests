export function getTaxValue(a){
    if (a < 12000) {
        return 0;
    }
    else if (a <= 36000){
        return 0.2 * a;
    }
    else {
        return 0.4 * a;
    }
}