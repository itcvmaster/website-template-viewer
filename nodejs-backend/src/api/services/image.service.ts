import { ImageModal } from '@/models/image';
import template from '@data/template.json';

export const ImageData: ImageModal[] = template;

class ImageService {
    /**
     * get the images list
     * @param {number} start is start index of data. if start index is -1 or undefined, return empty.
     * @param {number} end is end index of data.
     * @returns {results, pagination}
     */
    getImages(start: number, end: number) {
        // if pageSize is negative, returns full data
        if (start === -1) {
            return {
                results: [],
                pagination: {
                    start: 0,
                    end: 0,
                    total: ImageData.length
                }
            };
        }

        // otherwise, paginate the data
        start = Math.max(start, 0);
        end = Math.min(end, ImageData.length);

        return {
            results: ImageData.slice(start, end),
            pagination: {
                start: start,
                end: end,
                total: ImageData.length
            }
        }
    }

    /**
     * get the total number of images
     * @returns 0 | {results, pagination}
     */
    getImageCount() {
        return ImageData.length;
    }
}

export default new ImageService();