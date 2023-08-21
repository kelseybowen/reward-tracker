const Goal = require('../models/goal.model');

module.exports.findAllGoals = (req, res) => {
    Goal.find({})
        .then(allGoals => res.json(allGoals))
        .catch(err => res.json(err))
}

module.exports.findGoalById = (req, res) => {
    Goal.findById({_id: req.params.id})
        .then(goal => res.json(goal))
        .catch(err => res.json(err))
}

module.exports.createGoal = (req, res) => {
    Goal.create(req.body)
        .then(goal => res.json(goal))
        .catch(err => res.json(err))
}

module.exports.updateGoal = (req, res) => {
    Goal.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedGoal => res.json(updatedGoal))
        .catch(err => res.json(err))
}

module.exports.deleteGoal = (req, res) => {
    Goal.findByIdAndDelete({_id: req.params.id})
        .then(confirmedDelete => res.json(confirmedDelete))
        .catch(err => res.json(err))
}