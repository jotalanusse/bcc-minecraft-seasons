# bcc-minecraft-seasons
Map render configurations for the BCC Minecraft servers.

## World renders
If you are lucky, the following links will allow you to view the world renders. The server hosting these renders may go down at any time, so don't be surprised if they don't work.

#### Seasons:
| Minecraft World | Version | Overworld :deciduous_tree: | Nether :fire: | The End :full_moon: |
| :--- | :--- | :---: | :---: | :---: |
| Season 2 | - | [:white_check_mark:](http://bccsrv.xyz:8888/#season_2_overworld:0:0:0:1500:0:0:0:0:perspective) | [:white_check_mark:](http://bccsrv.xyz:8888/#season_2_nether:0:0:0:1500:0:0:0:0:perspective) | :no_entry: |
| Season 3 | - | _WIP_ | _WIP_ | _WIP_ |
| Season 4 | - | [:white_check_mark:](http://bccsrv.xyz:8888/#season_4_overworld:0:0:0:1500:0:0:0:0:perspective) | [:white_check_mark:](http://bccsrv.xyz:8888/#season_4_nether:0:0:0:1500:0:0:0:0:perspective) | [:white_check_mark:](http://bccsrv.xyz:8888/#season_4_end:0:0:0:1500:0:0:0:0:perspective) |
| Season 5 | - | [:white_check_mark:](http://bccsrv.xyz:8888/#season_5_overworld:0:0:0:1500:0:0:0:0:perspective) | [:white_check_mark:](http://bccsrv.xyz:8888/#season_5_nether:0:0:0:1500:0:0:0:0:perspective) | :no_entry: |
| Season 6 | - | [:white_check_mark:](http://bccsrv.xyz:8888/#season_6_overworld:0:0:0:1500:0:0:0:0:perspective) | [:white_check_mark:](http://bccsrv.xyz:8888/#season_6_nether:0:0:0:1500:0:0:0:0:perspective) | [:white_check_mark:](http://bccsrv.xyz:8888/#season_6_end:0:0:0:1500:0:0:0:0:perspective) |
| Season 7 | - | [:white_check_mark:](http://bccsrv.xyz:8888/#season_7_overworld:0:0:0:1500:0:0:0:0:perspective) | [:white_check_mark:](http://bccsrv.xyz:8888/#season_7_nether:0:0:0:1500:0:0:0:0:perspective) | [:white_check_mark:](http://bccsrv.xyz:8888/#season_7_end:0:0:0:1500:0:0:0:0:perspective) |
| Season 8 | - | [:white_check_mark:](http://bccsrv.xyz:8888/#season_8_overworld:0:0:0:1500:0:0:0:0:perspective) | [:white_check_mark:](http://bccsrv.xyz:8888/#season_8_nether:0:0:0:1500:0:0:0:0:perspective) | [:white_check_mark:](http://bccsrv.xyz:8888/#season_8_end:0:0:0:1500:0:0:0:0:perspective) |

#### Hardcore Seasons:
| Minecraft World | Version | Overworld | Nether | The End |
| :--- | :--- | :---: | :---: | :---: |
| Hardcore Season 1 | - | [:white_check_mark:](http://bccsrv.xyz:8888/#hardcore_season_1_overworld:0:0:0:1500:0:0:0:0:perspective) | [:white_check_mark:](http://bccsrv.xyz:8888/#hardcore_season_1_nether:0:0:0:1500:0:0:0:0:perspective) | [:white_check_mark:](http://bccsrv.xyz:8888/#hardcore_season_1_end:0:0:0:1500:0:0:0:0:perspective) |

#### Sandbox Seasons:
| Minecraft World | Version | Overworld | Nether | The End |
| :--- | :--- | :---: | :---: | :---: |
| Sandbox Season 1 | - | [:white_check_mark:](http://bccsrv.xyz:8888/#sandbox_season_1_overworld:0:0:0:1500:0:0:0:0:perspective) | [:white_check_mark:](http://bccsrv.xyz:8888/#sandbox_season_1_nether:0:0:0:1500:0:0:0:0:perspective) | [:white_check_mark:](http://bccsrv.xyz:8888/#sandbox_season_1_end:0:0:0:1500:0:0:0:0:perspective) |

#### Mod Seasons:
| Minecraft World | Version | Overworld | Nether | The End |
| :--- | :--- | :---: | :---: | :---: |
| Mod Season 1 | - | [:white_check_mark:](http://bccsrv.xyz:8888/#mod_season_1_overworld:0:0:0:1500:0:0:0:0:perspective) | [:white_check_mark:](http://bccsrv.xyz:8888/#mod_season_1_nether:0:0:0:1500:0:0:0:0:perspective) | :no_entry: |

## What is this?
This repository contains the **configuration files** for rendering the maps for the **BCC Minecraft servers**. The maps are rendered using **[BlueMap](https://github.com/BlueMap-Minecraft/BlueMap)**, a Minecraft map renderer.

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
