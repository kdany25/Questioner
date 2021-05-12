import dotenv from "dotenv";
dotenv.config();
import express from "express";
import userRoutes from "./Routes/api/UserR.js";
import meetingroute from "./Routes/api/meetupRoute.js";
import questionaireRoutes from "./Routes/api/questionerRouter.js"
import rsvpRoute from "./Routes/api/rsvpRoute.js"

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use("/api/v1", userRoutes);

app.use("/api/v1", meetingroute);

app.use("/api/v1",questionaireRoutes)


app.use("/api/v1",rsvpRoute)
app.listen(port, () => console.log("server have started!!!"));

export default app;





