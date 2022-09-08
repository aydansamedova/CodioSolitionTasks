const arr = [
  { type: "A", value: "Tesla" },
  { type: "A", value: "GMC" },
  { type: "B", value: "KIA" },
  { type: "C", value: "Dodge" },
  { type: "C", value: "Ford" },
];

const keyValue = () => {
  const typeCount = {};
  arr.forEach((obj) => {
    const { type } = obj;
    if (type in typeCount) {
      typeCount[type]++;
    } else {
      typeCount[type] = 1;
    }
  });

  // filter
 const res= arr.filter((values, index, self) =>
    typeCount[values.type] > 1 
      ?console.log(values.value)
      && index === self.findIndex((t) => t.type === values.type) :null
  );
 

};
keyValue();
