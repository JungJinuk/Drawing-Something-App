import express from 'express';
import fs from 'fs';

const router = express.Router();

const fileRoute = __dirname + '/../../public/imgData/userDrawings.json';


/*
    SUBMIT DRAWING: POST /api/draw
    BODY SAMPLE : { url: "sample" }
    ERROR CODES
      1: EMPTY CONTENTS
*/
router.post('/', (req, res) => {
  //  CHECK DRAWING VALID
  if (typeof req.body.url !== 'string' ||
    typeof req.body === 'undefined' ||
    typeof req.body.url === "") {
    return res.status(400).json({
      error: "EMPTY CONTENTS",
      code: 1
    });
  }

  console.log(req.body.url)
  console.log(fileRoute);

  fs.readFile(fileRoute, 'utf8',
    (err, data) => {
      if (err) {
        throw err;
      }
      let url2Json = JSON.parse(data),
        drawingList = url2Json.userDrawingLists,
        newDrawingUrl = {},
        re = / /g;

      newDrawingUrl.url = req.body.url.replace(re, '+');
      newDrawingUrl.id = Date.now();

      console.log(newDrawingUrl);

      drawingList.push(newDrawingUrl);
      fs.writeFile(fileRoute, JSON.stringify(url2Json, null, '\t'), 'utf8',
        (err, data) => {
          if (err) {
            throw err;
          }
          return res.json({ success: true });
        });
    });
});

/*
    READ DRAWING: GET /api/draw
*/
router.get('/', (req, res) => {
  fs.readFile(fileRoute, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    let drawings = JSON.parse(data).userDrawingLists;
    res.json(drawings);
  });
});


export default router;