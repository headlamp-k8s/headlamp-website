all: getdeps docs
	hugo
	cp staticwebapp.config.json ./public/

getdeps:
	pip3 install --upgrade pyyaml

.PHONY: docs
docs:
	@echo "Fetching external docs…"
	mkdir -p ./content/docs
	@find ./content/docs -maxdepth 1 -type l -delete
	python3 ./tools/docs-fetcher.py ./config.yaml

run:
	hugo server --buildFuture --watch --disableFastRender --config ./config.yaml\,./tmp_modules.yaml
