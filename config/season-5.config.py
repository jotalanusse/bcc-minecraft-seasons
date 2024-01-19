normal = [Base(), EdgeLines()]
lighting = [Base(), EdgeLines(), Lighting()]
smooth_lighting = [Base(), EdgeLines(), SmoothLighting()]
night = [Base(), EdgeLines(), Lighting(night=True)]
smooth_night = [Base(), EdgeLines(), SmoothLighting(night=True)]
nether = [Base(), EdgeLines(), Nether()]
nether_lighting = [Base(), EdgeLines(), Nether(), Lighting(strength=0.2)]
nether_smooth_lighting = [Base(), EdgeLines(), Nether(), SmoothLighting(strength=0.2)]
end_lighting = [Base(), EdgeLines(), Lighting(strength=0.5)]
end_smooth_lighting = [Base(), EdgeLines(), SmoothLighting(strength=0.5)]
cave = [Base(), EdgeLines(), Cave(), DepthTinting()]
biome_overlay = [ClearBase(), BiomeOverlay()]
heatmap_overlay = [ClearBase(), HeatmapOverlay()]

##################### Overworld #####################
worlds["Season 5 - Overworld"] = "./seasons/season-5/organized/overworld"
renders["Overworld"] = {
    "world": "Season 5 - Overworld",
    "title": "Overworld",
    "rendermode": smooth_lighting,
    "texturepath": "./texture-packs/VanillaDefault+1.19.4.zip",
}

renders["Overworld Biome Overlay"] = {
    "world": "Season 5 - Overworld",
    "title": "Biome Overlay",
    "rendermode": biome_overlay,
    "overlay": ["Overworld"],
    "texturepath": "./texture-packs/VanillaDefault+1.19.4.zip",
}

renders["Overworld Heatmap Overlay"] = {
    "world": "Season 5 - Overworld",
    "title": "Heatmap Overlay",
    "rendermode": heatmap_overlay,
    "overlay": ["Overworld"],
    "texturepath": "./texture-packs/VanillaDefault+1.19.4.zip",
}
      
##################### The Nether #####################
worlds["Season 5 - The Nether"] = "./seasons/season-5/organized/the-nether"
renders["The Nether"] = {
    "world": "Season 5 - The Nether",
    "title": "The Nether",
    "rendermode": nether_smooth_lighting,
    "texturepath": "./texture-packs/VanillaDefault+1.19.4.zip",
}

renders["The Nether Biome Overlay"] = {
    "world": "Season 5 - The Nether",
    "title": "Biome Overlay",
    "rendermode": biome_overlay,
    "overlay": ["The Nether"],
    "texturepath": "./texture-packs/VanillaDefault+1.19.4.zip",
}

renders["The Nether Heatmap Overlay"] = {
    "world": "Season 5 - The Nether",
    "title": "Heatmap Overlay",
    "rendermode": heatmap_overlay,
    "overlay": ["The Nether"],
    "texturepath": "./texture-packs/VanillaDefault+1.19.4.zip",
}
      
outputdir = "./output/season-5"
    