#!/bin/bash

# Set the git message template
# git config --local commit.template ./config/.gitmessage
current="$(pwd)"
git config --local commit.template $current/config/.gitmessage
echo $current