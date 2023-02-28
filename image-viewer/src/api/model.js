import { DataTypes } from "api/type-check";

export const ImageModel = {
    title: DataTypes.String,
    cost: DataTypes.String,
    id: DataTypes.String,
    description: DataTypes.String,
    thumbnail: DataTypes.String,
    image: DataTypes.String,

    $name: "ImageModel",
    $isCustomObject: true,
};

export const ImagesModel = {
    images: DataTypes.Array(ImageModel),
    start: DataTypes.Optional(DataTypes.Number),
    end: DataTypes.Optional(DataTypes.Number),
    total: DataTypes.Number,

    $name: "ImagesModel",
    $isCustomObject: true,
};
