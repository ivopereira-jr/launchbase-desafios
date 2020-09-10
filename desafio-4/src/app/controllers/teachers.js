const {age, date} = require('../../lib/utils')
const Teacher = require('../models/teacher')

module.exports = {
   index(req, res) {
      let { filter, page, limit } = req.query

      page = page || 1
      limit = limit || 3
      let offset = limit * (page - 1)

      const params = {
         filter,
         page,
         limit,
         offset,
         callback(teachers) {
            const pagination = {
               total: Math.ceil(teachers[0].total / limit),
               page
            }

            return res.render("teachers/index", {teachers, pagination, filter})
         }
      }

      Teacher.paginate(params)
      
   },
   create(req, res) {
      return res.render("teachers/create")
   },
   post(req, res) {
      const keys = Object.keys(req.body)

      for(key of keys) {
         //req.body.key == ""
         //akie e para validaçao dos campos de input
         if(req.body[key] == "")
            return res.send('please, fill all')
      }

      Teacher.create(req.body, function(teacher) {
         return res.redirect(`/teachers/${teacher.id}`)
      })

   },
   show(req, res) {//funcao para exibir o cadastro
      Teacher.find(req.params.id, function(teacher) {

         if(!teacher) return res.send("Teacher not found!")

         teacher.age = age(teacher.birth_date)
         teacher.subjects_taught = teacher.subjects_taught.split(",")
         teacher.created_at = date(teacher.created_at).format

         return res.render("teachers/show", {teacher})

      })

   },
   // edit funcao para editar os dados do cadastro
   edit(req, res) {
      Teacher.find(req.params.id, function(teacher) {
         if(!Teacher) return res.send("Teacher not found!")

         teacher.birth_date = date(teacher.birth_date).iso

         return res.render("teachers/edit", {teacher})
      })

   },
   put(req, res) {//para atualizr o cadastro
      const keys = Object.keys(req.body)

      for(key of keys) {
         if(req.body[key] == "")
            return res.send('please, fill all')
      }

      Teacher.update(req.body, function() {
         return res.redirect(`/teachers/${req.body.id}`)
      })
   },
   delete(req, res) {//para deletar o cadastro
      Teacher.delete(req.body.id, function() {
         return res.redirect(`/teachers`)
      })

   },

}   