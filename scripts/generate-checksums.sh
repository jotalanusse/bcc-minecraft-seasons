# Create the checksums for the world files

echo "Generating checksums for all files..."

echo "Generating checksums for original files..."
find ./original -type f -print0 | sort -z | xargs -0 sha256sum > original-checksum.txt

echo "Generating checksums for organized files..."
find ./organized -type f -print0 | sort -z | xargs -0 sha256sum > organized-checksum.txt

echo "Done!"
