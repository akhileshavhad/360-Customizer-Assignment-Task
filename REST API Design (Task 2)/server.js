const express = require('express');
const app = express();
const PORT = process.env.PORT || 300;




const userDB = {
    "Akhilesh_Avhad": {
        "username": "Akhilesh_Avhad",
        "name": "Akhilesh Avhad",
        "email": "akhileshavhad47@gmail.com",
        "age": "20",
        "location": "pune",
        "active_status": true

    },

    "Sumit_Najan": {
        "username": "Sumit_Najan",
        "name": "Sumit Najan",
        "email": "sumit07@gmail.com",
        "age": "22",
        "location": "Pune",
        "active_status": true
    }
};

app.get('/api/users/:username', (req, res) => {
    const { username } = req.params;
    const { fields, expand } = req.query;


    const user = userDB[username];
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    let responseUser = { ...user };

    
    if (fields) {
        const fieldsArray = fields.split(',');
        responseUser = fieldsArray.reduce((acc, field) => {
            if (user[field] !== undefined) acc[field] = user[field];
            return acc;
        }, { username: user.username });
    }

    if (expand) {
        const expandArray = expand.split(',');
        const additionalFields = expandArray.reduce((acc, field) => {
            if (user[field] !== undefined) acc[field] = user[field];
            return acc;
        }, {});
        responseUser.additionalFields = additionalFields;
    }

    res.json(responseUser);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

});

