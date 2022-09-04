import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectId } from 'bson';

export type TrackDocument = Track & Document;
@Schema()
export class Track {
  @Prop()
  name: string;
  @Prop()
  astist: string;
  @Prop()
  track: string;
  @Prop()
  listens: number;
  @Prop()
  picture: string;
  @Prop()
  audio: string;
  @Prop({ type: [{ type: ObjectId, ref: 'Comment' }] })
  comments: Comment[];
}
export const TrackSchema = SchemaFactory.createForClass(Track);
