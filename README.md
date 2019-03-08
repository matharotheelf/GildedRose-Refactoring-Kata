# GildedRose Refactoring Kata

This is a repository for the Gilded Rose Refactoring Kata. The GildedRose is a shop that need help keeping track of the value of its stock. It is the challenge of this kata to refactor this code so it is written more elegently. These are the rules of how the value of its stock varies: 

Once the sell by date has passed, Quality degrades twice as fast

The Quality of an item is never negative

“Aged Brie” actually increases in Quality the older it gets

The Quality of an item is never more than 50

“Sulfuras”, being a legendary item, never has to be sold or decreases in Quality

“Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert

“Conjured” items degrade in Quality twice as fast as normal items

## Getting Started

To run the progamme first create an object of the class "Game":

game = Game.new

Then you can create a grid of livecells! First you must create a "Grid" object:

grid = Grid.new

Then you can seed this grid with livecells by running:

grid.add_livecell(xcoordinate, ycoordinate)

Where "xcoordinate" and "ycoordinate" are the coordinates of the newly seeded livecell in the grid.

Then to find the next iteration's grid you must run "iterate" on the game object with the current grid as a parameter:

newgrid = game.iterate(grid)

This command returns the newly created grid so remember to save it to a variable. Then, to discover the positions of livecells in the new grid you can run:

newgrid.livecells_array[i].coordinate

Where i is the position of the livecell in the array storing the livecells.


### Prerequisites

To run the software you must have installed Ruby version 2.5.1p57 and to run the tests RSpec version 3.8.0.

### Installing

If you have installed bundler (https://bundler.io) you can quickly install all the gems used in this project. To install the gems run "bundle install" in the command line.

## Running the tests

To run the tests run "rspec" in the command line. The tests cover all the features of the program. There are also two feature tests written which run through two scenarios one with a grid with no live cells and one with a grid seeded with live cells.

## Built With

* [Ruby version 2.5.1p57](http://www.dropwizard.io/1.0.2/docs/) - Language used
* [RSpec version 3.8.0](http://rspec.info) - Testing framework

## Authors

* **Thomas Lawrence**

Challenged created by BBC

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

Thanks to the BBC for creating this challenge


### Prerequisites

To run the software you must have installed Ruby version 2.5.1p57 and to run the tests RSpec version 3.8.0.

### Installing

If you have installed bundler (https://bundler.io) you can quickly install all the gems used in this project. To install the gems run "bundle install" in the command line.

## Running the tests

To run the tests run "rspec" in the command line. The tests cover all the features of the program. There are also two feature tests written which run through two scenarios one with a grid with no live cells and one with a grid seeded with live cells.

## Built With

* [Ruby version 2.5.1p57](http://www.dropwizard.io/1.0.2/docs/) - Language used
* [RSpec version 3.8.0](http://rspec.info) - Testing framework

## Authors

* **Thomas Lawrence**

Challenged created by BBC

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

Thanks to the BBC for creating this challenge
