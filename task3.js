function uyniNarxiniBilish(hozirgiNarx, yil) {
    // Calculate the price increase rate
    const increaseRate = 0.5; // 50% increase
    const yearsToIncrease = 5;

    const intervals = Math.floor(yil / yearsToIncrease);

    const futurePrice = hozirgiNarx * Math.pow(1 + increaseRate, intervals);
    
    return futurePrice;
}

const futurePrice = uyniNarxiniBilish(100000, 5);
console.log(`5 yildan keyin narxi: ${futurePrice.toFixed(2)} dollar`);
