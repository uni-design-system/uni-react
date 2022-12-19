import React, { useEffect, useRef, useState } from 'react';

export interface ColorPickerProps {
  imageUrl: string;
}

interface rgbColor {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

export const ColorPicker = ({ imageUrl }: ColorPickerProps): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [pixelColor, setPixelColor] = useState<string>();
  const [averageColor, setAverageColor] = useState<string>();

  let canvas: HTMLCanvasElement | null;
  let ctx: CanvasRenderingContext2D | null;
  let data: Uint8ClampedArray | undefined;
  let img: HTMLImageElement;

  useEffect(() => {
    canvas = canvasRef.current;

    if (canvas) {
      ctx = canvas.getContext('2d');
      canvas.width = 900;
      canvas.style.width = '900px';
      canvas.height = 600;
      canvas.style.height = '600px';
    }

    img = document.createElement('img');
    img.crossOrigin = 'Anonymous';
    img.src = imageUrl;

    //once the image is loaded, add it to the canvas
    img.onload = (ev) => {
      ctx?.drawImage(img, 0, 0);
      //call the context.getImageData method to get the array of [r,g,b,a] values
      let imgDataObj = ctx?.getImageData(0, 0, canvas?.width || 0, canvas?.height || 0);
      data = imgDataObj?.data; //data prop is an array
      // console.log(data.length, 900 * 600 * 4); //  has 2,160,000 elements
      canvas?.addEventListener('mousemove', getPixel);
      // canvas?.addEventListener('click', addBox);
    };
  }, []);

  const getPixel = (ev: { offsetX: any; offsetY: any }) => {
    if (!canvas) return;
    //as the mouse moves around the image
    // let canvas = ev.target;
    let cols = canvas.width;

    // let rows = canvas.height;
    let { offsetX, offsetY } = ev;

    //call the method to get the r,g,b,a values for current pixel
    let c = getPixelColor(cols, offsetY, offsetX);

    //build a colour string for css
    let clr = `rgb(${c.red}, ${c.green}, ${c.blue})`; //${c.alpha / 255}
    //document.getElementById('pixelColor').style.backgroundColor = clr;

    //save the string to use elsewhere
    // pixel = clr;
    setPixelColor(clr);

    //now get the average of the surrounding pixel colours
    getAverage(ev);
  };

  const getAverage = (ev: { offsetX: any; offsetY: any }) => {
    if (!ctx) return;
    //create a 41px by 41px average colour square
    //replace everything in the canvas with the original image
    // let canvas = ev.target;
    let cols = canvas?.width || 0;
    let rows = canvas?.height || 0;

    //remove the current contents of the canvas to draw the image and box again
    ctx.clearRect(0, 0, cols, rows);

    //add the image from memory
    ctx.drawImage(img, 0, 0);
    let { offsetX, offsetY } = ev;
    const inset = 20;
    //inset by 20px as our workable range
    offsetX = Math.min(offsetX, cols - inset);
    offsetX = Math.max(inset, offsetX);
    offsetY = Math.min(offsetY, rows - inset);
    offsetY = Math.max(offsetY, inset);
    //create a 41 x 41 pixel square for the average
    let reds = 0; //total for all the red values in the 41x41 square
    let greens = 0;
    let blues = 0;
    //for anything in the range (x-20, y-20) to (x+20, y+20)
    for (let x = -1 * inset; x <= inset; x++) {
      for (let y = -1 * inset; y <= inset; y++) {
        let c = getPixelColor(cols, offsetY + y, offsetX + x);
        reds += c.red;
        greens += c.green;
        blues += c.blue;
      }
    }
    let nums = 41 * 41; //total number of pixels in the box
    let red = Math.round(reds / nums);
    let green = Math.round(greens / nums);
    let blue = Math.round(blues / nums);
    //create a colour string for the average colour
    let clr = `rgb(${red}, ${green}, ${blue})`;
    //now draw an overlaying square of that colour
    //make the square twice as big as the sample area
    ctx.fillStyle = clr;
    ctx.strokeStyle = 'solid 2px #FFFFFF';
    //save the average colour for later
    //average = clr;
    setAverageColor(clr);

    console.log(clr);

    ctx.strokeRect(offsetX - inset, offsetY - inset, 41, 41);
    ctx.fillRect(offsetX - inset, offsetY - inset, 41, 41);
  };

  const getPixelColor = (cols: number, x: number, y: number): rgbColor => {
    //see grid.html as reference for this algorithm
    let pixel = cols * x + y;
    let arrayPos = pixel * 4;

    return data
      ? {
          red: data[arrayPos],
          green: data[arrayPos + 1],
          blue: data[arrayPos + 2],
          alpha: data[arrayPos + 3],
        }
      : {
          red: 0,
          green: 0,
          blue: 0,
          alpha: 0,
        };
  };

  /*  const addBox = (ev) => {
    //user clicked. Let's add boxes below with the pixel and the average
    let colours = document.querySelector('.colours');
    let pixel = document.createElement('span');
    pixel.className = 'box';
    pixel.setAttribute('data-label', 'Exact pixel');
    pixel.setAttribute('data-color', pixel);

    let average = document.createElement('span');
    average.className = 'box';
    average.setAttribute('data-label', 'Average');
    average.setAttribute('data-color', average);

    pixel.style.backgroundColor = pixel;
    average.style.backgroundColor = average;
    colours.append(pixel, average);
  };*/

  return <canvas ref={canvasRef} />;
};
