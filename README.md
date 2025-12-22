# bcc-minecraft-seasons
Map render configurations for the BCC Minecraft servers. This repository contains the result of many years of gameplay and friendship.

## World renders
If you are lucky, the following links will allow you to view the world renders. The server hosting these renders may go down at any time, so don't be surprised if they don't work.

#### Seasons:
| Minecraft World | Year | Version | Overworld :deciduous_tree: | Nether :fire: | The End :full_moon: | World Size |
| :--- | :---: | :--- | :---: | :---: | :---: | :---: |
| Season 2 | - | - | [:white_check_mark:](http://bccsrv.xyz:8888/#season_2_overworld:0:0:0:1500:0:0:0:0:perspective) | [:white_check_mark:](http://bccsrv.xyz:8888/#season_2_nether:0:0:0:1500:0:0:0:0:perspective) | :no_entry: | 388 MB |
| Season 3 | - | - | [:white_check_mark:](http://bccsrv.xyz:8888/#season_3_overworld:0:0:0:1500:0:0:0:0:perspective) | [:white_check_mark:](http://bccsrv.xyz:8888/#season_3_nether:0:0:0:1500:0:0:0:0:perspective) | [:white_check_mark:](http://bccsrv.xyz:8888/#season_3_end:0:0:0:1500:0:0:0:0:perspective) | 1.10 GB |
| Season 4 | - | - | [:white_check_mark:](http://bccsrv.xyz:8888/#season_4_overworld:0:0:0:1500:0:0:0:0:perspective) | [:white_check_mark:](http://bccsrv.xyz:8888/#season_4_nether:0:0:0:1500:0:0:0:0:perspective) | [:white_check_mark:](http://bccsrv.xyz:8888/#season_4_end:0:0:0:1500:0:0:0:0:perspective) | 9.50 GB |
| Season 5 | - | - | [:white_check_mark:](http://bccsrv.xyz:8888/#season_5_overworld:0:0:0:1500:0:0:0:0:perspective) | [:white_check_mark:](http://bccsrv.xyz:8888/#season_5_nether:0:0:0:1500:0:0:0:0:perspective) | :no_entry: | 1.20 GB |
| Season 6 | - | - | [:white_check_mark:](http://bccsrv.xyz:8888/#season_6_overworld:0:0:0:1500:0:0:0:0:perspective) | [:white_check_mark:](http://bccsrv.xyz:8888/#season_6_nether:0:0:0:1500:0:0:0:0:perspective) | [:white_check_mark:](http://bccsrv.xyz:8888/#season_6_end:0:0:0:1500:0:0:0:0:perspective) | 6.00 GB |
| Season 7 | - | - | [:white_check_mark:](http://bccsrv.xyz:8888/#season_7_overworld:0:0:0:1500:0:0:0:0:perspective) | [:white_check_mark:](http://bccsrv.xyz:8888/#season_7_nether:0:0:0:1500:0:0:0:0:perspective) | [:white_check_mark:](http://bccsrv.xyz:8888/#season_7_end:0:0:0:1500:0:0:0:0:perspective) | 3.10 GB |
| Season 8 | 2023 | 1.20.4 | [:white_check_mark:](http://bccsrv.xyz:8888/#season_8_overworld:0:0:0:1500:0:0:0:0:perspective) | [:white_check_mark:](http://bccsrv.xyz:8888/#season_8_nether:0:0:0:1500:0:0:0:0:perspective) | [:white_check_mark:](http://bccsrv.xyz:8888/#season_8_end:0:0:0:1500:0:0:0:0:perspective) | 17.3 GB |

#### Mod Seasons:
| Minecraft World | Year | Version | Overworld :deciduous_tree: | Nether :fire: | The End :full_moon: | World Size |
| :--- | :---: | :--- | :---: | :---: | :---: | :---: |
| Mod Season 1 | - | - | _WIP_ | _WIP_ | :no_entry: | 1.90 GB |

## What is this?
This repository contains the **configuration files** for rendering the maps for the **BCC Minecraft servers**. The maps are rendered using **[BlueMap](https://github.com/BlueMap-Minecraft/BlueMap)**, a Minecraft map renderer.

## How do I use this?
_You don't_.

While this repository is public, the configuration files are useless without the actual Minecraft world files, and those are too large to be stored in a GitHub repository.

## Useful commands
If you are trying to run anything in this repository yourself, you are most likely me from the future and you forgot how to do this, here are some useful commands.

For generating the checksums for the world files use:
```sh
./generate-checksums.sh
```

For verifying the checksums for the world files use:
```sh
./verify-checksums.sh
```

For rendering all maps use:
```sh
./render.sh
```

For starting the Docker compose stack use:
```sh
docker-compose --env-file .env.docker.<ENVIRONMENT> up -d
```
