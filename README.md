# Etch-a-Sketch 

This project is a dynamic, interactive sketchpad implemented using HTML, CSS, and JavaScript. It allows users to create a customizable grid of squares that change color upon mouse hover, creating a pixel art-like effect.
## Features

- **Dynamic Grid Creation**: Generates a grid of squares based on user input allowing for easy adjustment of grid dimensions up to a maximum of 40x40 squares.

- **Flexbox Layout**: Utilizes CSS Flexbox for arranging squares in a grid layout, ensuring a consistent and responsive design without the need for CSS Grid.

- **Interactive Coloring**: Squares change color when hovered over, simulating a pen trail effect that allows users to "draw" on the grid.

- **Color Randomization and Progressive Darkening**: Initially assigns a random HSL color to each square. Implements a progressive darkening effect that increases the color's intensity with each mouseover, culminating in a black square after ten interactions.

- **Grid Resizing**: Features a user input field for changing the grid dimension, enabling the creation of a new grid within the same space without altering the sketchpad's overall size.

- **Error Handling**: Validates user input for grid dimensions, ensuring values are within a specified range (1-40) and providing user feedback for invalid entries.

- **Responsive Squares**: Adjusts the size of squares based on the grid dimension to ensure a visually appealing layout across various grid sizes.

