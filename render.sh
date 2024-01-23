# A script to render all worlds in the BlueMap folder

echo "Starting for all worlds..."

cd ./blue-map

# Season 2
java -jar BlueMap-3.20-cli.jar -c ./config/maps/season-2 -r

echo "Done!"
