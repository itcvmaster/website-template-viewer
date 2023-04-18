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
        const images = imageService.getImages(Number(start), Number(end));
        res.status(200).json(images);
    }

    /**
      * POST /api/images
      * @param {*} req A request 
      * @param {*} res A response
      * @returns a new thumbnail data
    */
    append(req: Request, res: Response) {
        const { title, cost, image, thumbnail, description } = req.body;
        const updatedImage = imageService.addThumbnail(String(title), String(cost), String(image), String(thumbnail), String(description));
        res.status(200).json(updatedImage);
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
