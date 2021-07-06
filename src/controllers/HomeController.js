import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      name: 'Maria',
      surname: 'Nejm',
      email: 'maria@gmail.com',
      age: 28,
      weight: 50,
      height: 1.45,
    });
    res.json(newStudent);
  }
}

export default new HomeController();
