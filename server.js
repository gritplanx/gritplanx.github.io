const express = require('express');
const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');
const app = express();

app.use(express.static('public')); // Serve static files from the public directory

app.get('/content', (req, res) => {
    const filePath = path.join(__dirname, 'content.docx');

    mammoth.convertToHtml({ path: filePath })
        .then(result => {
            res.send(result.value); // The generated HTML
        })
        .catch(err => {
            res.status(500).send('Error converting the document: ' + err);
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
