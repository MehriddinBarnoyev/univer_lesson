function samosaSoni(goshtKg, piyozKg, unKg) {
    
  const goshtInGrams = goshtKg * 1000;
  const piyozInGrams = piyozKg * 1000;
  const unInGrams = unKg * 1000;

  const goshtPerSamosa = 100; // grams
  const piyozPerSamosa = 50; // grams
  const unPerSamosa = 25; // grams

  const samosasFromGosht = Math.floor(goshtInGrams / goshtPerSamosa);
  const samosasFromPiyoz = Math.floor(piyozInGrams / piyozPerSamosa);
  const samosasFromUn = Math.floor(unInGrams / unPerSamosa);

  const totalSamosas = Math.min(
    samosasFromGosht,
    samosasFromPiyoz,
    samosasFromUn
  );

  console.log(`Siz ${totalSamosas} dona somsa tayyorlashingiz mumkin.`);
}

samosaSoni(2, 1, 0.5);
