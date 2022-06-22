import numpy as np
from PIL import Image


# Load a OpenFont format font from a local directory as an ImageFont object
# In this case, a TrueType font using the truetype method.
font = ImageFont.truetype(font='path/to/your/font.ttf', size=42)
# Create a new image onto which the text will be added
image = Image.new(mode='RGB', size=(1024, 256), color='#ffaa00')
# Create an ImageDraw object onto which the font text will be placed
draw = ImageDraw.Draw(im=image)
# Draw the text onto our image
draw.text(xy=(512, 128), text="overcoded - @}", font=font, fill='black', anchor='mm')
# Open the image via system standard image viewer
image.show()