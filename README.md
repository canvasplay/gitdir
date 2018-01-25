# gitdir
Generates a directory website listing local git bare repositories.

Besides the motivation of using bare repositories or not, having a local/network folder containing a large collection of git bare repositories can be a painful to deal with, you can't get more information about the repos but the folders name.

This script will read all git bare repos in the specified folder and will generate a simple html file listing the repos and giving some useful information like name description.

## Usage
node gitdir $dir $out


## TODO
Use nodegit to extract more information about each repository, p.e. author, date created, ... maybe also read a posible README inner file.
