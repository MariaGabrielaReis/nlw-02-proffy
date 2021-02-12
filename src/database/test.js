const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //inserir dados
    proffyValue = {
        name: "Maria Gabriela Reis", 
        avatar: "https://avatars0.githubusercontent.com/u/69374340?s=460&u=dda6284ba1f5192c4fd64c23b7d0b1337777336f&v=4", 
        whatsapp: "972474202",
        bio: "Adora um bom desafio, sendo apaixonada por qualquer tipo de programação. <br> Também gosta de ensinar e estudar matemática.",
    }

    classValue = {
        subject: 10,
        cost: "21",
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 2,
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})
    
    //consultas
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.* 
            FROM proffys
            JOIN classes
            ON (classes.proffy_id = proffys.id)
            WHERE proffys.id = 1;
    `)
    //console.log(selectedClassesAndProffys)

    const selectedClasschedules = await db.all(`
        SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = 1
            AND class_schedule.weekday = 2
            AND class_schedule.time_from <= 520
            AND class_schedule.time_to > 1320
    `)
    //console.log(selectedClasschedules)

})