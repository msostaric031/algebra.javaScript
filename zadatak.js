const mnozenje = () => {
  console.log("Tablica množenja:");
  for (i = 1; i <= 10; i++) {
    console.log("--------");
    for (j = 1; j <= 10; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
};

mnozenje();
