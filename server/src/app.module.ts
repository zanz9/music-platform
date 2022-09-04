import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackModule } from './track/track.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://root:root@cluster0.u6ooz4r.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
