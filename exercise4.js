function graduates (students) {
    // Code disini

    if (students.length === 0)  return '{}'

    //Get Class
    let classes = [];
    for(let counter = 0; counter<students.length; counter++){
        let initialClass = students[counter].class
        if(classes.includes(initialClass)) continue;
        classes.push(students[counter].class);
    }

    let objClass = {};
    let objStudent = {};
    


    for(let countClass = 0; countClass<classes.length; countClass++){
        objStudent = {}; 
        let arrStudents = [];
        for(let counter = 0; counter<students.length; counter++){
            objStudent = {};        
            if(classes[countClass] === students[counter].class && students[counter].score > 75){
                objStudent.name = students[counter].name;
                objStudent.score = students[counter].score;
                arrStudents.push(objStudent);
            }
             
        }

        
        objClass[classes[countClass]] = arrStudents;
        
    }
    objStudent = {}; 
    return objClass;

  }
  
  console.log(graduates([
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
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
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
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}