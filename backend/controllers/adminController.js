import Admin from "../models/adminModels.js";
import expressAsyncHandler from "express-async-handler";

export const createAdmin = expressAsyncHandler(async (req, res) => {
          const { firstName, lastName, image, email, password } = req.body;
        
          if (!email || !password) {
            res.status(400);
            throw new Error("Email and password are required");
          }
        
          const adminExist = await admin.findOne({ email });
        
          if (adminExist) {
            res.status(400);
            throw new Error("adminModels already exists");
          } else {
            const newAdmin = await Admin.create({
              firstName,
              lastName,
              image,
              email,
              password,
            });
        
            if (newAdmin) {
              generateToken(res, newAdmin._id);
              res.status(201).json({
                firstName: newAdmin.firstName,
                lastName: newAdmin.lastName,
                image: newAdmin.image,
                email: newAdmin.email,
              });
            } else {
              res.status(400);
              throw new Error("Invalid adminModels data");
            }
          }
        });