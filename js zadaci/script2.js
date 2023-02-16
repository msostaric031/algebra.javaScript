var tablica = "<table border=1>\n";

for (i = 0; i < 10; i++) {
  //   console.log("iteracija: " + i);

  if (i === 2) {
    tablica +=
      "<tr>\n\
            <td>Name" +
      " dva" +
      "</td>\n\
            <td>Rank" +
      " dva" +
      "</td>\n\
            <td>Class" +
      " dva" +
      "</td>\n\
    </tr>\n";
  } else {
    tablica +=
      "<tr>\n\
        <td>Name" +
      i +
      "</td>\n\
        <td>Rank" +
      i +
      "</td>\n\
        <td>Class" +
      i +
      "</td>\n\
</tr>\n";
  }
}

tablica += "</table>";

document.write(tablica);
