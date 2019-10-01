#!/bin/bash

# Set the git message template
# git config --local commit.template ./config/.gitmessage
current="$(pwd)"

if [[ "$OSTYPE" == "darwin"* ]]; then
    echo setting local commit template to $current/config/.gitmessage
    git config --local commit.template $current/config/.gitmessage
else
    echo looks like this is not a mac, not running anything
fi

exit 0