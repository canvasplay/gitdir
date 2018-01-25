# gitdir
Generates a directory website listing local git bare repositories.

Besides the motivation of using bare repositories or not, having a local/network folder containing a large collection of git bare repositories can be a painful to deal with, you can't get more information about the repos but the folders name.

This script will read all `description` files in your git bare repos from the specified folder and will generate a simple html file listing the repos and giving some useful information like name description.

## Usage
```
$ node gitdir [$dir] [$out]

$ node gitdir some/directory/

$ node gitdir some/directory/ dist/index.html

```
There are two optional arguments you can use:
- `$dir`: source directory containing git bare repos (defaults to `./`)
- `$out`: html output file (defaults to `./index.html`)

## TODO
Use http://www.nodegit.org/ for extracting more information about each repository: author, date created, ... read a posible README inner file...
