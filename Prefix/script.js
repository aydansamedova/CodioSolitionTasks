const arr =["alma", "albali", "alça"]
// ['alim', 'muellim', 'sagird'] - " "
//["alma", "albali", "alça"]; - al

const prefix = () => {
  if (arr.length === 0) {
    console.log(" epmty arr");
  }
  // arr-den bir soz goturduk
  let first = arr[0];
  //arr[0] elde var deye 1ci indexden
  for (let i = 1; i < arr.length; i++) {
    // prefix false deyilse
    while (arr[i].indexOf(first) != 0) {
      first = first.substring(0, first.length - 1);
    }
  }
  console.log(first);
};

prefix();
