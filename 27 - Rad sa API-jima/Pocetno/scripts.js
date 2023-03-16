var request = new XMLHttpRequest();

request.open(
  "GET",
  "https://xsmilex007.github.io/JS-API-example/mydata.json",
  true
);

request.onload = function (result) {
  console.log(result);
  document.write(result.currentTarget.response);
};

request.send();
