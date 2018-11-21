# The Wacky and Wild Kelly Ferrone Website Construction Zone

This is my personal website and laboratory for building websites. Feel free to look into the codes. 

## Requirements and Things you may need

1. You must have ruby installed, preferably around version 2.5.0 should do.  
2. Most of this is built in [Visual Studio Code](https://code.visualstudio.com/), so some docs will reference using it
    1. alternatively you could use [Codemix](https://www.genuitec.com/products/codemix/) which runs VSCode stuff in eclipse
3. A browser obviously
4. maybe some good [Bash](https://www.gnu.org/software/bash/) action to spice your life up
5. The `JEKYLL_GITHUB_TOKEN` environment variable must be set for the github feature to work with a valid github token.
6. for the VSCode Chrome Launch with VueJS Extension
    1. The `CHROME_EXTENSIONS` environment variable must be set and pointing to your chrome extensions directory
    2. the [VueJS extension](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?utm_source=chrome-ntp-icon) is already installed into the folder the `CHROME_EXTENSIONS` is pointing to. So click [here](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?utm_source=chrome-ntp-icon) and install it if need be.

## Installation and Development

Step 1: Build

    ./script/bootstrap

Step 2: Run the watcher and dev server

    ./script/server

## Lets Cover Third Party Libraries

### Jekyll Plugins

There is not much to do here because Github Pages only allows the following plugins: [Plugin List](https://help.github.com/articles/adding-jekyll-plugins-to-a-github-pages-site/)

### JS Libraries

In the `_config.yml` is a js node with a list of dependiencies. 

Basically the steps to find the info you need are like so:
 
1. find the package you want from npm first and copy the name
2. find the file you want on [UNPKG](https://unpkg.com/#/) by appending the name to `https://unpkg.com/<npm name>`. 
3. Now drill into package to find the distributed files.
4. When you find the file for production put them on the `env.prod.file` node. 
5. Then get the integrity by appending `?meta` to the files source url like so: `https://unpkg.com/<npm name>?meta`. 
