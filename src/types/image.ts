export type ImageInfo = {
    url: string;
    width: number;
    height: number;
};

export type Images = {
    THUMBNAIL: ImageInfo;
    SMALL?: ImageInfo;
    REGULAR?: ImageInfo;
    LARGE?: ImageInfo;
};
