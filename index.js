import Network from "./app/network.js";
import { connection } from "./storage.js";
import app from "./app.js";

const userTable = connection.getTable("user");
let user = {
  user_name: "friday candour",
};

const save_user = await userTable.save(user);

const dataTable = connection.getTable("data");

const data = {
  input: "1000",
  output: Date(),
};

const config = {};

const data_record = await dataTable.save(data);
await userTable.saveWithRelations(dataTable, save_user, data_record);

const paska = new app();

// paska.use((mes) => console.log(mes));
paska.run();

// Training data for a xor gate
const trainingData = [
  {
    input: [0, 0],
    output: [0],
  },
  {
    input: [0, 1],
    output: [1],
  },
  {
    input: [1, 0],
    output: [1],
  },
  {
    input: [1, 1],
    output: [0],
  },
];

let network;

// Create the network
network = new Network([2, 10, 10, 1]);

// Set a learning rate
const learningRate = 0.3;
network.setLearningRate(learningRate);

// Train the network
for (var i = 0; i < 0; i++) {
  const trainingItem =
    trainingData[Math.floor(Math.random() * trainingData.length)];
  // Randomly train
  network.train(trainingItem.input, trainingItem.output);
}

network.activate([1, 0]);
let result = network.runInputSigmoid();
result = Math.round(result[0]);
console.log(result);
