function benzinHisobla(benzinName, litr) {
  let priceEachLitr;
  if (benzinName == "Ai80") {
    priceEachLitr = 7000;
  } else if (benzinName == "Ai92") {
    priceEachLitr = 11000;
  } else if (benzinName == "Ai95") {
    priceEachLitr = 14000;
  } else {
    console.log(`Noto'g'ri benzni nomi`);
  }

  let total = priceEachLitr * litr;

  console.log(
    `Umumiy  ${litr}L  ${benzinName} narxi:  ${total} so'm`
  );
}

benzinHisobla("Ai92", 10);  