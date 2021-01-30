
let graphic
let font
let canvas

function preload() {
  font = loadFont('spacegrotesk-medium.otf')
}

function setup() {
  createCanvas(540, 540)
  background('#000000')
  
  // create offscreen graphics buffer
  graphic = createGraphics(width, height)
  
  // type setup offscreen in buffer
  graphic.textFont(font)
  graphic.textAlign(CENTER, CENTER)
  graphic.blendMode(SCREEN)
  graphic.textSize(800)
  graphic.fill('rgba(255, 0, 0, 0.9)')
  graphic.text('a', width / 2, height / 3)
  graphic.textSize(775)
  graphic.fill('rgba(0, 255, 0, 0.9)')
  graphic.text('a', width / 1.95, height / 2.95)
  graphic.textSize(750)
  graphic.fill('rgba(0, 0, 255, 0.9)')
  graphic.text('a', width / 2.05, height / 3.05)
}

const loopDuration = 3 * 60

function draw() {
  
  let currentFrame = frameCount % loopDuration
  let t = currentFrame / loopDuration
  let u = map(t, 0, 1, 0, 2 * PI)

  background('#000000')
  
  const tiles = 24
  const tileSize = width / tiles
  
  // loop over each tile
  for (let x = 0; x < tiles; x++) {
    for (let y = 0; y < tiles; y++) {
      
      const distortionX = cos(u + x * 0.5) * 30
      const distortionY = sin(u + y * 0.5) * 30
      
      // think of this as applying the grid to the source in the graphics buffer
      const sx = x * tileSize + distortionX
      const sy = y * tileSize + distortionY
      const sw = tileSize + distortionX
      const sh = tileSize + distortionY

      // and this as applying the grid to the destination on the canvas
      const dx = x * tileSize
      const dy = y * tileSize
      const dw = tileSize
      const dh = tileSize

      // grided image from buffer into main canvas
      image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
  
  if (frameCount === 1) {
    // saveCanvas('myCanvas', 'png');
  }
}