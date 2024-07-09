export function getTaxValue(a){
    if (a < 12000) {
        return 0;
    }
    else {
        return 0.2 * a;
    }
}