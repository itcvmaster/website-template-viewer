import { DataTypes } from "utils/type-check";

export const ImageModel = {
    count: DataTypes.Number,
    data: DataTypes.Array(UserModel),
    has_more: DataTypes.Boolean,
    object: DataTypes.Optional(DataTypes.String),

    $name: "ImageModel",
    $isCustomObject: true,
};

export const ImageModels = {
    count: DataTypes.Number,
    data: DataTypes.Array(ImageModel),
    has_more: DataTypes.Boolean,
    object: DataTypes.Optional(DataTypes.String),

    $name: "ImageModels",
    $isCustomObject: true,
};
