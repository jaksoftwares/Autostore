#!/bin/bash

# Define output file
OUTPUT_FILE="project_structure.txt"

# Clear previous output
> "$OUTPUT_FILE"

# Function to recursively list files and their content
list_files() {
    local dir="$1"
    local prefix="$2"
    
    # List all files and directories in the current directory
    for item in "$dir"/*; do
        if [ -d "$item" ]; then
            echo "${prefix}📂 $(basename "$item")/" >> "$OUTPUT_FILE"
            list_files "$item" "$prefix  "
        elif [ -f "$item" ]; then
            echo "${prefix}📄 $(basename "$item")" >> "$OUTPUT_FILE"
            echo -e "\n---- File: $item ----\n" >> "$OUTPUT_FILE"
            cat "$item" >> "$OUTPUT_FILE"
            echo -e "\n----------------------\n" >> "$OUTPUT_FILE"
        fi
    done
}

# Start listing from current directory
echo "📂 Project Structure:" > "$OUTPUT_FILE"
list_files "." "  "

echo "Project structure saved to $OUTPUT_FILE"
