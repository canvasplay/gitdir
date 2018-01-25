# gitdir
Generates a directory website listing local git bare repositories.

Besides the motivation of using git bare repositories or not, working with local/network folder containing a large collection of git bare repositories can be a pain, so the folder names is the only information you have unless you clone them.

This script will read the given directory looking for git bare repositories, then will extract name and description from the `description` files in each repostory and will generate a simple html file listing the repos and giving some useful information about them.

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
