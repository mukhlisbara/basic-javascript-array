function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1; j++) {
      if (result[j].year > result[j + 1].year) {
        const temp = result[j + 1];
        result[j + 1] = result[j];
        result[j] = temp;
      }
    }
  }

  // Rubah code ini dengan array hasil sorting secara ascending
  console.log("Sorted cars by year ascending:");
  console.log(result);
  return result;
}
