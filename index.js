// CREATE A SCHEMA
const schemaConfig = {
  class: "Meme",
  vectorizer: "img2vec-neural",
  vectorIndexType: "hnsw",
  moduleConfig: {
    "img2vec-neural": {
      imageFields: ["image"],
    },
  },
  properties: [
    {
      name: "image",
      dataType: ["blob"],
    },
    {
      name: "text",
      dataType: ["string"],
    },
  ],
};

await client.schema.classCreator().withClass(schemaConfig).do();

// STORE AN IMAGE
const img = readFileSync("./img/hi-mom.jpg");

const b64 = Buffer.from(img).toString("base64");

await client.data
  .creator()
  .withClassName("Meme")
  .withProperties({
    image: b64,
    text: "matrix meme",
  })
  .do();


//   QUERY AN IMAGE
const test = Buffer.from(readFileSync("./test.jpg")).toString("base64");

const resImage = await client.graphql
  .get()
  .withClassName("Meme")
  .withFields(["image"])
  .withNearImage({ image: test })
  .withLimit(1)
  .do();

// Write result to filesystem
const result = resImage.data.Get.Meme[0].image;
writeFileSync("./result.jpg", result, "base64");
