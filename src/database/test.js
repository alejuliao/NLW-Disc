const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db)=>{
  //insserir dados nas TABELAS
  proffyValue = {
    name: "Alexandre Julião testJS", 
    avatar: "https://avatars3.githubusercontent.com/u/62526197?s=460&u=160c79ea2c743bf2d7cb0a3c1fcb1a50f88f3320&v=4", 
    whatsapp:"11 99999-9999", 
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus fuga in eveniet iure aliquid et, dolores inventore hic, facere laudantium temporibus dignissimos illum commodi optio magnam incidunt error. Soluta, omnis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quasi accusantium dolorem vero itaque soluta? Labore suscipit, sit accusantium eum velit, at quibusdam id exercitationem non, nemo et consequuntur dolore.", 

  }
  classValue = {
    subject: 1, 
    cost: "20", 
    //proffy id vira pelo banco de dados
  }

  classScheduleValues = [
    {
    weekday: 1, 
    time_from: 720, 
    time_to: 1220
  },
    {
    weekday: 0, 
    time_from: 520, 
    time_to: 1220
  }
]
  //await createProffy(db, {proffyValue, classValue, classScheduleValues})

  //consultar os dados inseridos

  //consultar os dados inseridos

  // todos os proffys
const selectedproffys = await db.all("SELECT * FROM proffys")
// console.log("selectedproffys", selectedproffys)

  //consultar as classes de um determinado professor e trazer junto os daos do professor
  const selectClassesAndPRoffys = await db.all(`
      SELECT classes.*, proffys.*
      FROM proffys
      JOIN classes ON (classes.proffy_id = proffys.id)
      WHERE classes.proffy_id = 1; 
    `)
  // console.log("selectClassesAndPRoffys", selectClassesAndPRoffys)

  //

  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "520"
    AND class_schedule.time_to > "1320"
  `)
  // console.log("selectClassesSchedules", selectClassesSchedules)


})