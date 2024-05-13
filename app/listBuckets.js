import { hellos3 } from "./hellos3.js";

hellos3()
  .then((buckets) => console.log("Buckets retrieved successfully"))
  .catch((error) => console.error("An error occurred", error));
