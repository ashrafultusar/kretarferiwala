import { model, models, Schema ,Document} from "mongoose";


export interface ISliderImage extends Document {
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

const sliderImageSchema = new Schema<ISliderImage>(
  {
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const SliderImage =
  models.SliderImage || model<ISliderImage>("SliderImage", sliderImageSchema);

export default SliderImage;
