const Person = ({ name, age, job }) => {
  const _name = name;
  let _age = age;
  let _job = job;

  return {
    getName() {
      return _name;
    },

    getAge() {
      return _age;
    },

    getJob() {
      return _job;
    },

    setAge(newAge) {
      _age = newAge;
    },

    setJob(newJob) {
      _job = newJob;
    },
  };
};

const me = Person({
  name: 'Shaun',
  age: 44,
  job: 'developer',
});

me.setJob('senior developer');

console.log(me.getJob());

// const asdf = () => {
//   const num = 42;

//   return () => console.log(num);
// };

// const xyz = asdf();
// xyz();
