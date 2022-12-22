import React, { useEffect, useRef, useState } from 'react';
import { ColorSwatch } from '../color-swatch/color-swatch.component';

export interface ColorPickerProps {
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  sampleSize: number;
}

interface rgbColor {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

export const ColorPicker = ({ imageUrl, imageWidth, imageHeight, sampleSize = 41 }: ColorPickerProps): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [pixelColor, setPixelColor] = useState<string>('#fff');
  const [averageColor, setAverageColor] = useState<string>('#fff');

  let canvas: HTMLCanvasElement | null;
  let ctx: CanvasRenderingContext2D | null;

  let img: HTMLImageElement;

  useEffect(() => {
    canvas = canvasRef.current;

    if (canvas) {
      ctx = canvas.getContext('2d');
      canvas.width = imageWidth;
      canvas.style.width = `${imageWidth}px`;
      canvas.height = imageHeight;
      canvas.style.height = `${imageHeight}px`;
    }

    img = document.createElement('img');
    img.crossOrigin = 'Anonymous';
    img.src = imageUrl;

    //once the image is loaded, add it to the canvas
    img.onload = (ev) => {
      ctx?.drawImage(img, 0, 0);
      //call the context.getImageData method to get the array of [r,g,b,a] values

      let imgDataObj = ctx?.getImageData(0, 0, canvas?.width || 0, canvas?.height || 0);

      const data = imgDataObj?.data; //data prop is an array

      if (!!data && !!canvas) {
        canvas?.addEventListener('mousemove', (ev: MouseEvent) => {
          getPixel(data, ev);
        });
      }

      // canvas?.addEventListener('click', addBox);
    };
  }, []);

  const getPixel = (data: Uint8ClampedArray, ev: MouseEvent) => {
    if (!canvas) return;
    //as the mouse moves around the image
    // let canvas = ev.target;
    let cols = canvas.width;

    // let rows = canvas.height;
    let { offsetX, offsetY } = ev;

    //call the method to get the r,g,b,a values for current pixel
    let c = getPixelColor(data, cols, offsetY, offsetX);

    //build a colour string for css
    let clr = `rgb(${c.red}, ${c.green}, ${c.blue})`; //${c.alpha / 255}
    //document.getElementById('pixelColor').style.backgroundColor = clr;

    //save the string to use elsewhere
    // pixel = clr;
    setPixelColor(clr);

    //now get the average of the surrounding pixel colours
    setAverageColor(getAverage(data, ev));
  };

  const getAverage = (data: Uint8ClampedArray, ev: { offsetX: any; offsetY: any }): string => {
    if (!ctx) return '#fff';
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
    const inset = Math.round(sampleSize / 2);
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
        let c = getPixelColor(data, cols, offsetY + y, offsetX + x);
        reds += c.red;
        greens += c.green;
        blues += c.blue;
      }
    }
    let nums = inset * inset * 4; //total number of pixels in the box
    let red = Math.round(reds / nums);
    let green = Math.round(greens / nums);
    let blue = Math.round(blues / nums);
    //create a colour string for the average colour
    let clr = `rgb(${red}, ${green}, ${blue})`;

    //now draw an overlaying square of that colour
    //make the square twice as big as the sample area
    ctx.fillStyle = clr;
    ctx.strokeStyle = 'solid 2px #FFFFFF';
    ctx.strokeRect(offsetX - inset, offsetY - inset, inset * 2, inset * 2);
    ctx.fillRect(offsetX - inset, offsetY - inset, inset * 2, inset * 2);

    return clr;
  };

  const getPixelColor = (data: Uint8ClampedArray, cols: number, x: number, y: number): rgbColor => {
    let pixel = cols * x + y;
    let arrayPos = pixel * 4;

    return {
      red: data[arrayPos],
      green: data[arrayPos + 1],
      blue: data[arrayPos + 2],
      alpha: data[arrayPos + 3],
    };
  };

  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 16 }}>
        <canvas ref={canvasRef} />
      </div>
      <ColorSwatch swatchColor={pixelColor}>Pixel Color</ColorSwatch>
      <ColorSwatch swatchColor={averageColor}>Average Color</ColorSwatch>
    </div>
  );
};
