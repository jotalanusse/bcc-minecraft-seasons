# Verify the checksums for the world files

echo "Verifying checksums for all files..."

echo "Verifying original files..."
sha256sum -c original-checksum.txt

echo "Verifying organized files..."
sha256sum -c organized-checksum.txt

echo "Done!"
