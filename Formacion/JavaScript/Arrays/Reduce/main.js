const students = [
    {
      name: "Jill",
      lastname: "Doe",
      age: 23,
      course: "Marketing",
    },
    {
      name: "John",
      lastname: "Doe",
      age: 20,
      course: "Web Development",
    },
    {
      name: "Jack",
      lastname: "Doe",
      age: 22,
      course: "Accounting",
    },
    {
      name: "Ryan",
      lastname: "Ray",
      age: 20,
      course: "Web Development",
    },
    {
      name: "Jane",
      lastname: "Doe",
      age: 21,
      course: "Financial Management",
    },
];

const developers = [
    {
      id: 1,
      name: "John",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
    },
    {
      id: 2,
      name: "Jane",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
    },
    {
      id: 3,
      name: "Jack",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
    },
  ];

  const result = developers.reduce(function (allSkills, student){
    return Array.from(new Set([...allSkills, ...student.skills]))
  }, [])

  console.log(result)