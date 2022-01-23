const MiniStudent = require('../models/miniStudentsModel');

const miniStudentController = {};

// R E G I S T E R   N E W   S T U D E N T S
miniStudentController.register = async (req, res, next) => {
    const {
        body: { firstName, lastName, email, classLevel, age },
      } = req;

      const newMiniStudent = new MiniStudent({
        firstName,
        lastName,
        email,
        classLevel,
        age
      });

      try {
        await newMiniStudent.save();
        return res.send({
          message: "New Student add Successfully"
        });
      } catch(e) {
        next(e);
      }
}

// R E G I S T E R   M U L T I P E
miniStudentController.registerMulti = async (req, res, next) => {

    const students = [
        {
            "firstName": "Arthur",
            "lastName": "SMITH",
            "email": "SMITH@gmail.com",
            "classLevel": "A",  
            "age":12, 
            "moyen": 15
        },
        {
            "firstName": "Arthèe",
            "lastName": "JONES",
            "email": "JONES@gmail.com",
            "classLevel": "A",  
            "age":16,
            "moyen": 14
        },
        {
            "firstName": "Absalon",
            "lastName": "BROWN",
            "email": "BROWN@gmail.com",
            "classLevel": "B",  
            "age":11, 
            "moyen": 14
        },
        {
            "firstName": "Acace",
            "lastName": "JOHNSON",
            "email": "JOHNSON@gmail.com",
            "classLevel": "B",  
            "age":13, 
            "moyen": 14
        },
        {
            "firstName": "Achaire",
            "lastName": "WILLIAMS",
            "email": "WILLIAMS@gmail.com",
            "classLevel": "A",  
            "age":12, 
            "moyen": 13
        },
        {
            "firstName": "Achille",
            "lastName": "TAYLOR",
            "email": "TAYLOR@gmail.com",
            "classLevel": "B",  
            "age":16, 
            "moyen": 15
        },
        {
            "firstName": "Adalbéron",
            "lastName": "WILSON",
            "email": "WILSON@gmail.com",
            "classLevel": "A",  
            "age":16, 
            "moyen": 14
        },
        {
            "firstName": "Adel",
            "lastName": "DAVIS",
            "email": "DAVIS@gmail.com",
            "classLevel": "A",  
            "age":12, 
            "moyen": 14
        },
        {
            "firstName": "Adelphe",
            "lastName": "WHITE",
            "email": "WHITE@gmail.com",
            "classLevel": "C",  
            "age":13, 
            "moyen": 15
        },
        {
            "firstName": "Adenet",
            "lastName": "CLARK",
            "email": "CLARK@gmail.com",
            "classLevel": "A",  
            "age":14
        },
        {
            "firstName": "Adéodat",
            "lastName": "HALL",
            "email": "HALL@gmail.com",
            "classLevel": "C",  
            "age":13, 
            "moyen": 16
        },
        {
            "firstName": "Agathon",
            "lastName": "THOMAS",
            "email": "THOMAS@gmail.com",
            "classLevel": "C",  
            "age":12, 
            "moyen": 14
        },
        {
            "firstName": "Agrippin",
            "lastName": "THOMPSON",
            "email": "THOMPSON@gmail.com",
            "classLevel": "A",  
            "age":12, 
            "moyen": 16
        },
        {
            "firstName": "Aiable",
            "lastName": "MOORE",
            "email": "MOORE@gmail.com",
            "classLevel": "A",  
            "age":14
        },
        {
            "firstName": "Aié",
            "lastName": "HILL",
            "email": "HILL@gmail.com",
            "classLevel": "C",  
            "age":16, 
            "moyen": 15
        },
        {
            "firstName": "Alain",
            "lastName": "WALKER",
            "email": "WALKER@gmail.com",
            "classLevel": "A",  
            "age":12, 
            "moyen": 14
        },
        {
            "firstName": "Albanou",
            "lastName": "ANDERSON",
            "email": "ANDERSON@gmail.com",
            "classLevel": "B",  
            "age":12, 
            "moyen": 14
        },
        {
            "firstName": "Albéricou",
            "lastName": "WRIGHT",
            "email": "WRIGHT@gmail.com",
            "classLevel": "C",  
            "age":13, 
            "moyen": 15
        },
        {
            "firstName": "Aubérie",
            "lastName": "MARTIN",
            "email": "MARTIN@gmail.com",
            "classLevel": "C",  
            "age":13, 
            "moyen": 14
        },
        {
            "firstName": "Alcie",
            "lastName": "WOOD",
            "email": "WOOD@gmail.com",
            "classLevel": "A",  
            "age":12, 
            "moyen": 15
        },
        {
            "firstName": "Alcibiade",
            "lastName": "ALLEN",
            "email": "ALLEN@gmail.com",
            "classLevel": "A",  
            "age":12, 
            "moyen": 16
        },
        {
            "firstName": "Alcideou",
            "lastName": "ROBINSON",
            "email": "ROBINSON@gmail.com",
            "classLevel": "D",  
            "age":13, 
            "moyen": 16
        },
        {
            "firstName": "Alcée",
            "lastName": "LEWIS",
            "email": "LEWIS@gmail.com",
            "classLevel": "A",  
            "age":12, 
            "moyen": 13
        },
        {
            "firstName": "Aldonce",
            "lastName": "MITCHELL",
            "email": "Aldonce@MITCHELL.com",
            "classLevel": "D",  
            "age":14, 
            "moyen": 15
        },
        {
            "firstName": "Aldéric",
            "lastName": "SCOTT",
            "email": "Aldéric@Aldéric.com",
            "classLevel": "A",  
            "age":11, 
            "moyen": 15
        },
        {
            "firstName": "Alexandre",
            "lastName": "YOUNG",
            "email": "Alexandre@YOUNG.com",
            "classLevel": "A",  
            "age":12, 
            "moyen": 14
        },
        {
            "firstName": "Alpinien",
            "lastName": "JACKSON",
            "email": "Alpinien@JACKSON.com",
            "classLevel": "D",  
            "age":12, 
            "moyen": 13
        },
        {
            "firstName": "Aandin",
            "lastName": "ADAMS",
            "email": "Aandin@ADAMS.com",
            "classLevel": "A",  
            "age":11, 
            "moyen": 14
        },
        {
            "firstName": "Abroise",
            "lastName": "GREEN",
            "email": "Abroise@GREEN.com",
            "classLevel": "A",  
            "age":12, 
            "moyen": 13
        },
        {
            "firstName": "Aédéeou",
            "lastName": "EVANS",
            "email": "Aédéeou@EVANS.com",
            "classLevel": "B",  
            "age":11, 
            "moyen": 16
        },
        {
            "firstName": "Aadis",
            "lastName": "KING",
            "email": "Aadis@KING.com",
            "classLevel": "A",  
            "age":12, 
            "moyen": 14
        },
        {
            "firstName": "Anastase",
            "lastName": "JOHN",
            "email": "Anastase@JOHN.com",
            "classLevel": "A",  
            "age":13, 
            "moyen": 15
        },
        {
            "firstName": "Ancelin",
            "lastName": "HARRIS",
            "email": "Ancelin@HARRIS.com",
            "classLevel": "D",  
            "age":12, 
            "moyen": 15
        },
        {
            "firstName": "Arthèe",
            "lastName": "JONES",
            "email": "JONES@gmail.com",
            "classLevel": "A",  
            "age":14, 
            "moyen": 15
        },
        {
            "firstName": "Absalon",
            "lastName": "BROWN",
            "email": "BROWN@gmail.com",
            "classLevel": "B",  
            "age":11, 
            "moyen": 15
        },
        {
            "firstName": "Abroise",
            "lastName": "GREEN",
            "email": "Abroise@GREEN.com",
            "classLevel": "A",  
            "age":12,
             "moyen": 14,
        },
        {
            "firstName": "Aédéeou",
            "lastName": "EVANS",
            "email": "Aédéeou@EVANS.com",
            "classLevel": "B",  
            "age":11, 
            "moyen": 16
        }
    ]

  try {
    await MiniStudent.collection.insert(students, (err, docs) => { 
      if (err){ 
          return console.error(err);
      } else {
        console.log("Multiple documents inserted to Collection");
      }
    });
    return res.send({
      message: "New Student add Successfully"
    });
  } catch(e) {
    next(e);
  }
}

// G E T   S T U D E N T S
miniStudentController.get = async (req, res, next) => {
    const {
      query: { offset, limit }
    } = req;
    const options = {
      page: parseInt(offset, 10),
      limit: parseInt(limit, 10),
      sort: { dateCreation: -1 }
    };
    try {
      const result = await MiniStudent.paginate({}, options);
      const { docs, total } = result;
      return res.send({
        total,
        result: docs
      });
    } catch (e) {
      next(e);
    }
  };

//   F O R M A T I O N   M O N G O   D B
    // O P E R A T O R S   F O R   F  I N D   
    miniStudentController.getAll = async(req, res, next) => {
        try {
            // I) Comparison Query Operators
                // 1) $in
                    //   return students who have classLevel A and B and limited to 10
                    // const result = await MiniStudent.find({classLevel: {$in: ['A', 'B']}}).limit(10);

                //  2) $eq 
                    // return Students who egale classLevel C and sort in dataCreaction (-1 => last save first show and 1 => last save last show) 
                    // const result = await MiniStudent.find({classLevel: {$eq: 'C'}}).sort({dateCreation: -1});

                // 3) $gt
                    // return Students li age dyalhom kbar 9at3an men 13>
                    // const result = await MiniStudent.find({age: {$gt: 13}});

                // 4) $gte
                    // return students li age dyalhom kbar ou egale 13 =>
                    // const result = await MiniStudent.find({age: {$gte: 13}});

                // 5) $lt
                    // return Students li age dyalhom sghar 9at3an men 13<
                    // const result = await MiniStudent.find({age: {$lt: 13}});

                    
                // 6) $lte
                    // return students li age dyalhom sghar ou egale 13 =>
                    // const result = await MiniStudent.find({age: {$lte: 13}});

                    
                // 7) $ne
                    // return students li age dyalhom diff not egale 13 =>
                    // const result = await MiniStudent.find({age: {$ne: 13}});

                // 8) $nin
                    // return students li age dyalhom DIFF dyal 12 et 15 =>
                    // const result = await MiniStudent.find({age: {$nin: [12, 15]}});


            // II) Logical Query Operators
                // 1) $and
                    // return Students li3andhom classLevel C et D  o age dyalhom not egale 11 et 14 O tan sorti bi dateCreation
                    // const result = await MiniStudent.find({$and: [{classLevel: {$in: ['C', 'D']}}, {age: {$nin: [11, 14]}}]}).sort({dateCreation: -1})
                    // const result = await MiniStudent.find({
                    //     $and: [
                    //         {age: {$in: [12, 13]}},
                    //         { moyen: {$nin: [14, 16]}}
                    //     ]
                    // }).sort({dateCreation: -1});

                // 2) $not
                    //  return Students liMa3andhomch classLevel A et B
                    // const result = await MiniStudent.find({classLevel: {$not: {$in: ['A', 'B']}}});

                // 3) $nor
                    // return Students li diff dyal classLevel A,B,C et age dyalhom not egale 11 et 13
                    // const result = await MiniStudent.find({$nor: [{classLevel: {$in: ['A', 'B', 'C']}}, {age: {$nin: [11, 13]}}]})

                // 4) $or
                    // return students lima3andhomch  classLevel A,B,C Ou li3ando age 14, 16
                    // const result = await MiniStudent.find({$or: [{classLevel: {$nin: ['A', 'B', 'C']}}, {age: {$in: [14, 16]}}]});

                
                // III) Element Query Operators
                    // 1) $exists
                        //  retuen Students li3andhom age
                        // const result = await MiniStudent.find({age: {$exists: true}});

                
                // IV) Evaluation Query Operators
                    // 1) $expr
                        // return students li3andhom moyen O tan sort bi age O  moyen 
                        // const result = await MiniStudent.find({ 
                        //     $expr: {$gt: ["$age", "$moyen"]},
                        //     moyen: {$exists: true} 
                        // });

                    // 2) $mod
                        // const result = await MiniStudent.find({
                        //     moyen: {$mod: [4, 0]}
                        // });

                    // 3) $regex
                        // return Students li taybdaw le nom dyalhom bi A
                        // const result = await MiniStudent.find({
                        //     lastName: {$regex: /^A.*/}
                        // })

                    // 4) $text
                        // Premierement khasni ncree index lastName il return students li3andhom lastName dyalhom ADAMS 
                        // MiniStudent.createIndexes({lastName: "text"})
                        // const result = await MiniStudent.find({
                        //     $text: {$search: "ADAMS"}
                        // })

                    // 5) $where
                        // return students qui y ont le nom ADAMS
                        // const result = await MiniStudent.find({
                        //     $where: () => {
                        //         return this.lastName == 'ADAMS'
                        //     }
                        // })

                    
                // V) Array Query Operators
                    // 1) $all ==> Equivalent to $and Operation
                        // const result = await MiniStudent.find({
                        //     age: {$all: [12, 16]}
                        // });

                    // 2) $elemMatch => plutot pour les arrays comme results
                        // { _id: 1, results: [ 82, 85, 88 ] }
                        // { _id: 2, results: [ 75, 88, 89 ] }
                        // return students qui y ont results plus ou egale 80 et moins de 85
                        // const result = await MiniStudent.find({
                        //     results: {
                        //         $elemMatch: {
                        //             $gte: 80, 
                        //             $lt: 85
                        //         }
                        //     }
                        // });

                        // const result = await MiniStudent.find({
                        //     zipcode: 63109,
                        //     students: {
                        //         $elemMatch: {
                        //             school: {$eq: 100}
                        //         }
                        //     }
                        // })

            return res.send({
                result
            });

        } catch(e) {
            next(e);
        }
    }

    // O P E R A T O R S   F O R   U P D A T E
    miniStudentController.update = async (req, res, next) => {
        try {
            const {body: {age, moyen}, params: {id}} = req;
            // 1) $inc
                const result = await MiniStudent.update(
                    {_id: id},
                    {$inc: {moyen}}
                )

                return res.send({
                    message: "Update Successfully",
                    result
                })
        } catch(e) {
            next(e);
        }
    }

  module.exports = miniStudentController;