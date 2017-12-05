# silvestrevivo.github.io

Personal website | Front-end developer | _http://silvestrevivo.github.io/_

## workflow

The develop branch contains the webpack source and all workflow for development.
Master branch contains the production source to deploy on Git. To merge dist/ into
master branch:

**First step:**

    $ git branch
    develop
    * master
    $ git checkout develop dist/
    $ git status
    # On branch master
    # Changes to be committed:
    #   (use "git reset HEAD <file>..." to unstage)
    #
    #   new file:   ………..
    $ git commit -m “merge dist folder into master branch”

**Second step:**

    Move all files to root directory and delele de empty dist/ folder
