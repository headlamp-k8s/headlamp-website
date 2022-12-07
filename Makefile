all: getdeps docs
	hugo --config ./themes/kinvolk-generic/base-config.yaml,./config.yaml

getdeps:
	pip3 install --upgrade pyyaml

.PHONY: docs
docs:
	@echo "Fetching external docs…"
	@find ./content/docs -maxdepth 1 -type l -delete
	python3 ./tools/docs-fetcher.py ./config.yaml

run:
	hugo server --buildFuture --watch --disableFastRender --config ./themes/kinvolk-generic/base-config.yaml,./config.yaml\,./tmp_modules.yaml
