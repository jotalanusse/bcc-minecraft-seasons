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
worlds["Hardcore Season 1 - Overworld"] = "./seasons/hardcore-season-1/organized/overworld"
renders["Overworld"] = {
    "world": "Hardcore Season 1 - Overworld",
    "title": "Overworld",
    "rendermode": smooth_lighting,
    "texturepath": "./texture-packs/VanillaDefault+1.19.4.zip",
}

renders["Overworld Biome Overlay"] = {
    "world": "Hardcore Season 1 - Overworld",
    "title": "Biome Overlay",
    "rendermode": biome_overlay,
    "overlay": ["Overworld"],
    "texturepath": "./texture-packs/VanillaDefault+1.19.4.zip",
}

renders["Overworld Heatmap Overlay"] = {
    "world": "Hardcore Season 1 - Overworld",
    "title": "Heatmap Overlay",
    "rendermode": heatmap_overlay,
    "overlay": ["Overworld"],
    "texturepath": "./texture-packs/VanillaDefault+1.19.4.zip",
}
      
##################### The Nether #####################
worlds["Hardcore Season 1 - The Nether"] = "./seasons/hardcore-season-1/organized/the-nether"
renders["The Nether"] = {
    "world": "Hardcore Season 1 - The Nether",
    "title": "The Nether",
    "rendermode": nether_smooth_lighting,
    "texturepath": "./texture-packs/VanillaDefault+1.19.4.zip",
}

renders["The Nether Biome Overlay"] = {
    "world": "Hardcore Season 1 - The Nether",
    "title": "Biome Overlay",
    "rendermode": biome_overlay,
    "overlay": ["The Nether"],
    "texturepath": "./texture-packs/VanillaDefault+1.19.4.zip",
}

renders["The Nether Heatmap Overlay"] = {
    "world": "Hardcore Season 1 - The Nether",
    "title": "Heatmap Overlay",
    "rendermode": heatmap_overlay,
    "overlay": ["The Nether"],
    "texturepath": "./texture-packs/VanillaDefault+1.19.4.zip",
}
      
##################### The End #####################
worlds["Hardcore Season 1 - The End"] = "./seasons/hardcore-season-1/organized/the-end"
renders["The End"] = {
    "world": "Hardcore Season 1 - The End",
    "title": "The End",
    "rendermode": end_smooth_lighting,
    "texturepath": "./texture-packs/VanillaDefault+1.19.4.zip",
}

renders["The End Biome Overlay"] = {
    "world": "Hardcore Season 1 - The End",
    "title": "Biome Overlay",
    "rendermode": biome_overlay,
    "overlay": ["The End"],
    "texturepath": "./texture-packs/VanillaDefault+1.19.4.zip",
}

renders["The End Heatmap Overlay"] = {
    "world": "Hardcore Season 1 - The End",
    "title": "Heatmap Overlay",
    "rendermode": heatmap_overlay,
    "overlay": ["The End"],
    "texturepath": "./texture-packs/VanillaDefault+1.19.4.zip",
}
      
outputdir = "./output/hardcore-season-1"
    