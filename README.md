# bcc-minecraft-seasons
Map render configurations for the BCC Minecraft servers.

## World renders
If you are lucky, the following links will allow you to view the world renders. The server hosting these renders may go down at any time, so don't be surprised if they don't work.

### Season 1:
- [Overworld](https://bccminecraft.com/season1/overworld/)
- [Nether](https://bccminecraft.com/season1/nether/)
- [End](https://bccminecraft.com/season1/end/)

## What is this?
This repository contains the **configuration files** for rendering the maps for the **BCC Minecraft servers**. The maps are rendered using **[Overviewer](https://overviewer.org/)**, a Minecraft map renderer written in Python.

## How do I use this?
_You don't_.

While this repository is public, the configuration files are useless without the actual Minecraft world files, and those are too large to be stored in a GitHub repository. I'm definitely not going to pay for LFS storage just to store Minecraft world files.

## Useful commands
If you are trying to run anything in this repository yourself, or you are me from the future and you forgot how to do this, here are some useful commands.

For rendering all maps use:
```sh
cd ./blue-map
java -jar BlueMap-<VERSION>-cli.jar -r
```

For starting the web server to see progress or something use:
```sh
cd ./blue-map
java -jar BlueMap-<VERSION>-cli.jar -w
```

For starting the Docker compose stack use:
```sh
docker-compose --env-file .env.docker.<ENVIRONMENT> up -d
```
