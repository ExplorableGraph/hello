import sharp from "sharp";

export default function thumbnail(imageBuffer) {
  // return sharp(imageBuffer).resize(200, 200).rotate().toBuffer();
  return imageBuffer !== undefined
    ? sharp(imageBuffer).resize(200, 143).rotate().toBuffer()
    : undefined;
}
