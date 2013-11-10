#!/bin/bash

# https://gist.github.com/kentbrew/776580
sudo iptables -t nat -L
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j     REDIRECT --to-ports 9292
sudo iptables -t nat -L
