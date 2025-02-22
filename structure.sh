#!/bin/bash

# Define the directory to scan (current directory by default)
DIR="${1:-.}"

# Generate and display the directory structure
echo "📂 Project Directory Structure:"
tree "$DIR" -I "node_modules|.git|.next|dist|coverage|.turbo|.vercel" --dirsfirst
