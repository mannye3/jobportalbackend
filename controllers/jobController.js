const createJob = async(req, res) =>{
    res.send('create job')
}



const getAllJobs = async(req, res) =>{
    res.send('get all jobs')
}



const updateJob = async(req, res) =>{
    res.send('update job')
}




const showStats = async(req, res) =>{
    res.send('show stats job')
}


const deleteJob = async(req, res) =>{
    res.send('delete job')
}


export {createJob, deleteJob, getAllJobs, updateJob, showStats}