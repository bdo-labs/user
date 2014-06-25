

BIN:="node_modules/.bin"
CARTERO:="$(BIN)/cartero"
NPM:=$(shell type -p npm)


SRC:=$(shell find -E ./ -regex '/^.*(html|js|json|css)$$/')


build: node_modules $(SRC)
	$(CARTERO) . build/

node_modules: package.json
	$(NPM) install

test:
	@echo "    No tests have yet been written"

clean:
	rm -fr build

.PHONY: test clean

