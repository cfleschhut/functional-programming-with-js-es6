const DEVELOPMENT = true;

const fetchDataReal = () => {
  // time-intensive operations here
};

const fetchDataFake = () => ({
  name: 'John Doe',
  age: 44,
});

const fetchData = DEVELOPMENT ? fetchDataFake : fetchDataReal;

fetchData();
