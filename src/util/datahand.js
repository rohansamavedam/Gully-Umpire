const fs = require('fs');

const loadData = () => {
    try {
        const bufferData = fs.readFileSync('../data/data.json')
        const notesJson = bufferData.toString();
        const notes = JSON.parse(notesJson);   
        return notes; 
    } catch (error) {
        return []
    }
}

module.exports = {
    loadData: loadData
}