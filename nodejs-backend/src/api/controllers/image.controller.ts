import imageService from "@services/image.service";
import { Request, Response } from "express";

class ImageController {
    /**
      * GET /api/images
      * @param {*} req A request 
      * @param {*} res A response
      * @returns paginate image list
    */
    list(req: Request, res: Response) {
        const { start, end } = req.query;
        res.status(200).json(imageService.getImages(Number(start), Number(end)));
    }

    /**
      * GET /api/images/count
      * @param {*} _req A request 
      * @param {*} res A response to send
      * @returns the total count of images
    */
    count(_req: Request, res: Response) {
        res.status(200).json(imageService.getImageCount());
    }
}

export default new ImageController;
