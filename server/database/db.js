import mongoose from 'mongoose';

const Connection = async (username, password) => {
    
    const URL = `mongodb://${username}:${password}@ac-7jpluds-shard-00-00.ag3rign.mongodb.net:27017,ac-7jpluds-shard-00-01.ag3rign.mongodb.net:27017,ac-7jpluds-shard-00-02.ag3rign.mongodb.net:27017/?ssl=true&replicaSet=atlas-woex8z-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;