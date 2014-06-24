

BIN:="node_modules/.bin"
PARCELIFY:="$(BIN)/parcelify"


SRC:=index.js *.css


build: $(SRC)
	mkdir -p $@
	$(PARCELIFY) $< -j build/build.js -c build/build.css

test:
	@echo "    No tests have yet been written"

clean:
	rm -fr build

.PHONY: test clean

