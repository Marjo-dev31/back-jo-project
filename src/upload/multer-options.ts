import { diskStorage } from 'multer';

export const multerOptions = {
  storage: diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      const filename = file.originalname;
      cb(null, filename);
    },
  }),
};
