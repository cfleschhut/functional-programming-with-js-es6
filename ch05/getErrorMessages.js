const currentInputValues = {
  firstName: 'F',
  lastName: 'L',
  zipCode: '12345',
  state: 'ABC',
};

const inputCriteria = {
  firstName: [
    (value) =>
      value.length >= 2 ? '' : 'First name must be at least two characters',
  ],
  lastName: [
    (value) =>
      value.length >= 2 ? '' : 'Last name must be at least two characters',
  ],
  zipCode: [
    (value) =>
      value.length === 5 ? '' : 'Zip code must be exactly five characters long',
  ],
  state: [
    (value) =>
      value.length === 2 ? '' : 'State must be exactly two characters long',
  ],
};

const getErrorMessages = (inputs, criteria) =>
  Object.keys(inputs)
    .reduce(
      (acc, fieldName) => [
        ...acc,
        ...criteria[fieldName].map((test) => test(inputs[fieldName])),
      ],
      []
    )
    .filter((message) => message);

console.log(getErrorMessages(currentInputValues, inputCriteria));
