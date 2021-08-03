import { Application, Request, Response } from "express";
import { json } from "body-parser";
import CoursesData from "../../data/courses.json";
import mongoose from "mongoose";

mongoose.connect('mongodb+srv://MatiusRock:3CASL3u1Kpibt7Yi@cluster0.xglab.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useCreateIndex:true,
  useNewUrlParser : true,
  useUnifiedTopology : true
}, ()  => {
  console.log('conexion exitosa')
});

export const loadApiEndpoints = (app: Application): void => {
 
  app.get("/products", (req: Request, res: Response) => {
    return res.status(200).send(CoursesData);
  });
};
