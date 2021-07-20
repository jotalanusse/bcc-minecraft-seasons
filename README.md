
# bcc-minecraft-seasons
### The archive for all the BCC Minecraft seasons
Here you can find all the BCC Minecraft seasons that were played throughout the years. An explanation of what this project contains can be found right below.

## Seasons
### The following seasons are available in this repository:
- [Season 2](seasons/season-2/)
- [Season 3](seasons/season-3/)
- [Season 4](seasons/season-4/)
- [Season 5](seasons/season-5/)
- [Season 6 [Episode 1]](seasons/season-6/episode-1/)
- Season 6 [Episode 2] (W.I.P)

Each season contains an **archive** folder that stores the original Minecraft server (or what's left of it) in multiple **1.5GB RAR** files. To access these files just download them and extract them.

Next you will find a **world** folder, this folder contains a **clean version of the Minecraft world** (Overworld, The nether and The End). The MCA files found here were filtered using the legacy version of [Minety](https://github.com/jotalanusse/minety) to remove unused region files.

Along the MCA world files, the **world** folder also includes the **DAT level file** used to render the worlds.

Finally, in the same directory you can also find a **README** containing the settings used to clean the world, and some **PNG images** that show the original world and what was kept after the cleaning.

## Renders
### Each season has a world render:
- [Season 2](https://worlds.bccsrv.com/seasons/2)
- [Season 3](https://worlds.bccsrv.com/seasons/3)
- [Season 4](https://worlds.bccsrv.com/seasons/4)
- [Season 5](https://worlds.bccsrv.com/seasons/5)
- [Season 6 [Episode 1]](https://worlds.bccsrv.com/seasons/6/episodes/1)
- Season 6 [Episode 2] (W.I.P)

The renders were done using [Minecraft Overviewer](https://github.com/overviewer/Minecraft-Overviewer/) (awesome project, go check it out!). So you will need to download it if you want to render the worlds yourself.

The configuration for each world render can be found in the [renders](renders/) folder, along a **BATCH file** to render all the worlds at the same time.

In the [renders](renders/) folder you will also find a **Dockerfile** and a **docker-compose.yml** used to serve the world renders in an **Nginx** server.
