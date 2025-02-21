#!/bin/bash

# Define output file
OUTPUT_FILE="project_structure.txt"

# Generate directory structure
tree -a -I "node_modules|.next|.git" > "$OUTPUT_FILE"

echo "Project structure saved to $OUTPUT_FILE"
