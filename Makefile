
#
# Path
#

SHELL:=/bin/bash
PATH:=./node_modules/.bin:$(PATH)


#
# Settings
#

REPORTER?=spec


#
# Sources
#

SRC:=$(wildcard lib/*)
TESTS:=$(wildcard test/*.test.js)


#
# Targets
#

build: node_modules $(SRC)
	mkdir -p $@
	atomify
	@echo ""
	@echo "    user module was built!"
	@echo ""

node_modules: package.json
	npm install

test: build
	mocha --reporter $(REPORTER) $(TESTS)

clean:
	rm -fr build

.PHONY: clean test

