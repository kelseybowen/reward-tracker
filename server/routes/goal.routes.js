const GoalController = require('../controllers/goal.controller');

module.exports = (app) => {
    app.get('/goals', GoalController.findAllGoals);
    app.get('/goals/:id', GoalController.findGoalById);
    app.post('/goals/new', GoalController.createGoal);
    app.put('/goals/:id', GoalController.updateGoal);
    app.delete('/goals/:id', GoalController.deleteGoal);
}