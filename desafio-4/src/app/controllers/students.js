const {age, date, grade} = require('../../lib/utils')
const Student = require('../models/student')

module.exports = {
   index(req, res) {
      // para a paginaçao 
      let { filter, page, limit } = req.query

      //isso deixa meio que dinamico para fazer a continuaçao da paginaçao
      page = page || 1
      limit = limit || 2
      let offset = limit * (page - 1)

      const params = {
         filter,
         page,
         limit,
         offset,
         callback(students) {
            const pagination = {
               total: Math.ceil(students[0].total / limit),
               page
            }

            return res.render("students/index", { students, pagination, filter })
         }

      }

      Student.paginate(params)
      
   },
   create(req, res) {
      Student.teachersSelectOptions(function (options) {
         
         return res.render("students/create", {teacherOptions: options})
      })

   },
   post(req, res) {
      const keys = Object.keys(req.body)

      for(key of keys) {
         //req.body.key == ""
         //akie e para validaçao dos campos de input
         if(req.body[key] == "")
            return res.send('please, fill all')
      }

      Student.create(req.body, function(student) {
         return res.redirect(`/students/${student.id}`)
      })

   },
   show(req, res) {//funcao para exibir o cadastro
      Student.find(req.params.id, function(student) {
         if(!Student) return res.send("Student not found!")

         student.birth = date(student.birth_date).birthDay
         
         return res.render("students/show", {student})

      })

   },
   // edit funcao para editar os dados do cadastro
   edit(req, res) {
      Student.find(req.params.id, function(student) {
         if(!Student) return res.send("Student not found!")

         student.birth_date = date(student.birth_date).iso

         Student.teachersSelectOptions(function(options) {
         
            return res.render("students/edit", {student, teacherOptions: options})
         })

      })

   },
   put(req, res) {//para atualizr o cadastro
      const keys = Object.keys(req.body)

      for(key of keys) {
         if(req.body[key] == "")
            return res.send('please, fill all')
      }

      Student.update(req.body, function() {
         return res.redirect(`/students/${req.body.id}`)
      })
   },
   delete(req, res) {//para deletar o cadastro
      Student.delete(req.body.id, function() {
         return res.redirect(`/students`)
      })

   },
  
}   