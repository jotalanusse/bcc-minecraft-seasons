normal = [Base(), EdgeLines()]
lighting = [Base(), EdgeLines(), Lighting()]
smooth_lighting = [Base(), EdgeLines(), SmoothLighting()]
night = [Base(), EdgeLines(), Lighting(night=True)]
smooth_night = [Base(), EdgeLines(), SmoothLighting(night=True)]
nether = [Base(), EdgeLines(), Nether()]
nether_lighting = [Base(), EdgeLines(), Nether(), Lighting()]
nether_smooth_lighting = [Base(), EdgeLines(), Nether(), SmoothLighting()]
cave = [Base(), EdgeLines(), Cave(), DepthTinting()]
biome_overlay = [Base(), BiomeOverlay()]
heatmap_overlay = [Base(), HeatmapOverlay()]

worlds["Sandbox Season 1 - Overworld"] = "./seasons/sandbox-season-1/organized/overworld"
renders["Overworld"] = {
    "world": "Sandbox Season 1 - Overworld",
    "title": "Overworld",
    "rendermode": smooth_lighting,
    "texturepath": "./texture-packs/VanillaDefault+1.19.4.zip",
}

renders["Overworld Biome Coloring Overlay"] = {
    "world": "Sandbox Season 1 - Overworld",
    "title": "Biome Coloring Overlay",
    "rendermode": biome_overlay,
    "overlay": ["Overworld"]
    "texturepath": "./texture-packs/VanillaDefault+1.19.4.zip",
}

renders["Overworld Heatmap Coloring Overlay"] = {
    "world": "Sandbox Season 1 - Overworld",
    "title": "Heatmap Coloring Overlay",
    "rendermode": heatmap_overlay,
    "overlay": ["Overworld"]
    "texturepath": "./texture-packs/VanillaDefault+1.19.4.zip",
}
      
worlds["Sandbox Season 1 - The Nether"] = "./seasons/sandbox-season-1/organized/the-nether"
renders["The Nether"] = {
    "world": "Sandbox Season 1 - The Nether",
    "title": "The Nether",
    "rendermode": nether_smooth_lighting,
    "texturepath": "./texture-packs/VanillaDefault+1.19.4.zip",
}

renders["The Nether Biome Coloring Overlay"] = {
    "world": "Sandbox Season 1 - The Nether",
    "title": "Biome Coloring Overlay",
    "rendermode": biome_overlay,
    "overlay": ["The Nether"]
    "texturepath": "./texture-packs/VanillaDefault+1.19.4.zip",
}

renders["The Nether Heatmap Coloring Overlay"] = {
    "world": "Sandbox Season 1 - The Nether",
    "title": "Heatmap Coloring Overlay",
    "rendermode": heatmap_overlay,
    "overlay": ["The Nether"]
    "texturepath": "./texture-packs/VanillaDefault+1.19.4.zip",
}
      
worlds["Sandbox Season 1 - The End"] = "./seasons/sandbox-season-1/organized/the-end"
renders["The End"] = {
    "world": "Sandbox Season 1 - The Nether",
    "title": "The End",
    "rendermode": normal,
    "texturepath": "./texture-packs/VanillaDefault+1.19.4.zip",
}

renders["The End Biome Coloring Overlay"] = {
    "world": "Sandbox Season 1 - The End",
    "title": "Biome Coloring Overlay",
    "rendermode": biome_overlay,
    "overlay": ["The End"]
    "texturepath": "./texture-packs/VanillaDefault+1.19.4.zip",
}

renders["The End Heatmap Coloring Overlay"] = {
    "world": "Sandbox Season 1 - The End",
    "title": "Heatmap Coloring Overlay",
    "rendermode": heatmap_overlay,
    "overlay": ["The End"]
    "texturepath": "./texture-packs/VanillaDefault+1.19.4.zip",
}
      
outputdir = "./output/sandbox-season-1"
    