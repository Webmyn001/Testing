  import User from "../models/UserModels";

  export const getUsers = async(res, req) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
  }

  export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
  }

   export const saveUser = async (req, res) => {
    const user = new User(req.body);
    try {
        const updateduser = await User.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateduser);
 }
 catch (error) {
    res.status(400).json({message:error.message});
 }
   }

   export const deleteUser = async (req, res) => {
    try {
        const deleteduser = await User.deleteOne({_id:req.params.id});
        res.status(200).json(deleteduser);
 }
 catch (error) {
    res.status(400).json({message:error.message});
 }
   }


   function(req, res) {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
    }

    const createLesson = async (req, res) => {
      const {Topic,
             Title,
             body1,
      } = req.body
  
      try {
          const lesson = await Lesson.create({Topic,Title,body1})
          res.status(200).json(lesson)
      } catch (error) {
          res.status(400).json({error:error.message})
      }
    }


    const customerObj = new customerDocument({ type: 'bbb', test: 'aaa' });