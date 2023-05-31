# Weaviate Meme Search Project

This project demonstrates how to use the Weaviate knowledge graph to store and search for memes based on images. It utilizes the Weaviate JavaScript client library (`weaviate-ts-client`) for interacting with the Weaviate instance.

## Prerequisites

- Weaviate instance running on `localhost:8080`. You can install Weaviate from [here](https://www.semi.technology/developers/weaviate/current/get-started/installation.html).
- Node.js and npm installed on your machine.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/TheODDYSEY/Image-Search-Engine.git


2.Install the dependencies:

   `` bash
    cd Image-Search-Engine
    npm install


3.Update the Weaviate instance details in index.js:

    ``javascript
    Copy code
    const client = weaviate.client({
        scheme: 'http',
        host: 'localhost:8080',
    });

4.Create the "Meme" schema and store an image:
    Make sure you have the image file matrix.jpg in the ./img directory.
    

5.Query an image:

    Make sure you have the image file matrix.jpg in the project directory.
    
    Run the following command:
        node index.js

# # CONTRIBUTING
Contributions are welcome! If you find any issues or have suggestions, please open an issue or submit a pull request.