import React from 'react'

const NewGoal = () => {

    // const handleSubmit = () => {

    // }

    return (
        <div className='col-lg-4 p-2 m-2'>
            <form>
                <h1>New Goal</h1>
                <div className="form-group">
                    <label className='form-label' htmlFor="goalName">Goal Name</label>
                    <input className='form-control' type="text" />
                </div>
                <div className="form-group">
                    <label className='form-label' htmlFor="endGoal">End Goal</label>
                    <input className='form-control' type="text" />
                </div>
                <div className="form-group">
                    <label className='form-label' htmlFor="description">Description</label>
                    <input className='form-control' type="text" />
                </div>
                <button className='btn btn-primary' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewGoal