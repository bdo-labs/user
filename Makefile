

BIN:="node_modules/.bin"
CARTERO:="$(BIN)/cartero"


SRC:=index.js *.css


build: $(SRC)
	mkdir -p $@
	$(CARTERO) . build/

test:
	@echo "    No tests have yet been written"

clean:
	rm -fr build

.PHONY: test clean

