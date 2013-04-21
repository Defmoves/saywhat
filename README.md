Saywhat - Perform a news search on the command line
===================================================

As I spent more and more time in the command line, I fancied a quick and easy way to search the news headlines withough having to alt tag away from the cursor. Hence saywhat, a basic command line tool written in node, which can pull down and display news search results, powered by bing. 

This programe assumes chrome, node and npm on OSX.

# Installation
```
$ git clone git://github.com/Defmoves/saywhat
$ cd saywhat
$ npm link
```

# Usage

First send your query, once you've scanned the results, select the appropiate headline via it's index and pass it back to the under to --read (or -r) flag. The result will be opened in Chrome, if you are logged on to readability you can process the article directly via the link at the top of the page.

```
$ saywhat [your-search-query]
$ saywhat -r [number]
```

for example

```
$ saywhat boris misplaces his johnson
$ saywhat -r 0
```

Dependencies
--------------------------------------

Thanks to the creators and ontributers of the following libraries on which this is built.

1. [cli-color](https://github.com/medikoo/cli-color)
2. [commander](https://github.com/visionmedia/commander.js)
3. [node-bing](https://github.com/thinkphp/node-bing)
4. [jasmine-node](https://github.com/mhevery/jasmine-node)

And of course, node, npm, readability, chrome and bing.
