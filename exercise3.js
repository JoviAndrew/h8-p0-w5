function highestScore (students) {
    // Code disini

    if(students.length === 0) return '{}';

    //Get Class
    let classes = [];
    for(let counter = 0; counter<students.length; counter++){
        let initialClass = students[counter].class
        if(classes.includes(initialClass)) continue;
        classes.push(students[counter].class);
    }
    let objClass = {};
    let objStudent = {};

    //Get Highest Grade and student name and store it in an object
    for(let countClass = 0; countClass<classes.length; countClass++){
        objStudent = {};
        let gradeTemp = 0;
        let nameTemp = '';
        for(let counter = 0; counter<students.length; counter++){
            
            if(classes[countClass] === students[counter].class && gradeTemp === 0){
                gradeTemp = students[counter].score;
                nameTemp = students[counter].name;
            }else if(classes[0] === students[counter].class && gradeTemp !== 0){
                if(gradeTemp < students[counter].score){
                    gradeTemp = students[counter].score;
                    nameTemp = students[counter].name;
                }
            } 
        }
        
        objStudent.name = nameTemp;
        objStudent.score = gradeTemp;

        objClass[classes[countClass]] = objStudent
        
    }
    
    return objClass;

  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
//   {
//     foxes: { name: 'Alexander', score: 100 },
//     wolves: { name: 'Alisa', score: 76 },
//     tigers: { name: 'Viktor', score: 80 }
//   }
  
  
  console.log(highestScore([])); //{}