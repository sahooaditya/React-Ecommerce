//domain/.netlify/functions/hello

const items = [
  { id: 1, name: "AdiTya" },
  { id: 2, name: "john" },
  { id: 3, name: "Aka" },
  { id: 4, name: "Raju" },
  { id: 5, name: "Xyz" },
];

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
