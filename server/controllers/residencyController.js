import asyncHandler from 'express-async-handler';
import { prisma } from '../config/prismaConfig.js';

export const createResidency = asyncHandler(async (req, res) => {
    const { title, description, price, address, city, country, image, facilities, userEmail } = req.body.data;

    console.log(req.body.data);
    
    try {
        const residency = await prisma.residencies.create({
            data: {
                title,
                description,
                price,
                address,
                city,
                country,
                image,
                facilities,
                owner: { connect: { email: userEmail } }, // Use 'connect' instead of 'connected'
            },
        });

        res.send({
            message: "Residency created successfully",
            residency,
        });
    } catch (err) {
        if (err.code === "P2002") {
            throw new Error("A residency with the same address already exists.");
        }
        throw new Error(err.message);
    }
});

// GET ALL RESIDENCIES
export const getAllResidencies = asyncHandler(async (req, res) => {
    try {
      const residencies = await prisma.residencies.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      });
      res.send(residencies);
    } catch (error) {
      throw new Error(error.message);
    }
  });

  export const getResidency = asyncHandler(async (req, res) => {
    const { id } = req.params;
  
    try {
      const residency = await prisma.Residencies.findUnique({
        where: { id },
      });
      res.send(residency);
    } catch (err) {
      throw new Error(err.message);
    }
  }); 